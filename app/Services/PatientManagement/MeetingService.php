<?php

declare(strict_types=1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\MeetingDto;
use App\DataTransferObjects\PatientManagement\MeetingUpdateDto;
use App\Enums\AppointmentStatus;
use App\Enums\MeetingStatus;
use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\Meeting;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MeetingService
{
    public function index(Request $request): array
    {
        return [
            'meeting_count' => $this->meetingCount(),
            'meeting_filter' => $this->meetingFilter(),
            'meeting_list' => $this->meetingList($request),
        ];
    }

    private function meetingCount(): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->first()->id;

        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();

        $appointmentQuery = Appointment::where('doctor_id', $doctorId)
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd]);

        $appointmentActive = (clone $appointmentQuery)
            ->where('status', AppointmentStatus::ACTIVE)
            ->count();

        $appointmentCompleted = (clone $appointmentQuery)
            ->where('status', AppointmentStatus::COMPLETED)
            ->count();

        $appointmentCancelled = (clone $appointmentQuery)
            ->where('status', AppointmentStatus::CANCELED)
            ->count();

        return [
            'total_meetings_for_month' => $appointmentCancelled + $appointmentActive + $appointmentCompleted,
            'cancelled_meetings' => $appointmentCancelled,
            'active_meetings' => $appointmentActive,
            'completed_meetings' => $appointmentCompleted,
        ];
    }

    private function meetingFilter(): array
    {
        return MeetingStatus::all();
    }

    private function meetingList($request)
    {
        $meetingStatusParam = $request->input('meeting_status');
        $doctorId = Doctor::where('user_id', Auth::id())->firstOrFail()->id;

        $meetings = Meeting::query()
            ->with(['patient' => function ($query) {
                $query->select('id', 'first_name', 'last_name', 'date_of_birth', 'address', 'phone_number', 'email');
            }])
            ->filterByMeetingStatus($meetingStatusParam)
            ->select(['id', 'meeting_status', 'date', 'description', 'patient_id'])
            ->where('doctor_id', $doctorId)
            ->get();

        $formattedMeetings = $meetings->map(function ($meeting) {
            return [
                'id' => $meeting->id,
                'meeting_status' => $meeting->meeting_status,
                'meeting_date' => $meeting->date,
                'description' => $meeting->description,
                'patient_id' => $meeting->patient_id,
                'patient_full_name' => $meeting->patient ? $meeting->patient->first_name . ' ' . $meeting->patient->last_name : null,
                'patient_date_of_birth' => $meeting->patient ? $meeting->patient->date_of_birth : null,
                'address' => $meeting->patient ? $meeting->patient->address : null,
                'phone_number' => $meeting->patient ? $meeting->patient->phone_number : null,
                'email' => $meeting->patient ? $meeting->patient->email : null,
            ];
        });

        return $formattedMeetings;
    }

    public function show($meeting): Collection
    {
        $doctorId = Doctor::where('user_id', Auth::id())->firstOrFail()->id;
        return Meeting::with(['patient:id', 'doctor:id'])->where('doctor_id', $doctorId)->find($meeting);
    }

    public function store(MeetingDto $dto): Meeting
    {
        return Meeting::create([
            'description' => $dto->description,
            'result' => $dto->result,
            'written_entities' => $dto->written_entities,
            'date' => $dto->date,
            'appointment_id' => $dto->appointment_id,
            'patient_id' => $dto->patient_id,
            'doctor_id' => $dto->doctor_id,
        ]);
    }

    public function update(MeetingUpdateDto $dto, Meeting $meeting): Meeting
    {
        $meeting->update($dto->toArray());
        return $meeting;
    }
}
