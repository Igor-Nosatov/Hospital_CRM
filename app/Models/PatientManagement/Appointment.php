<?php

declare (strict_types = 1);

namespace App\Models\PatientManagement;

use App\Builders\AppointmentBuilder;
use App\Enums\AppointmentStatus;
use App\Enums\AppointmentType;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\MedicalService;
use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Appointment
 *
 * @package App\Models
 *
 * @property int $id
 * @property \DateTime $appointment_datetime
 * @property string|null $reason
 * @property string|null $symptoms
 * @property string|null $notes
 * @property bool $status
 * @property \DateTime|null $reminder_datetime
 * @property bool $is_follow_up
 * @property int $patient_id
 * @property int $doctor_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read Patient $patient
 * @property-read Doctor $doctor
 */
class Appointment extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */protected $table = 'appointments';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'appointment_datetime',
        'reason',
        'symptoms',
        'notes',
        'status',
        'type',
        'reminder_datetime',
        'patient_id',
        'doctor_id',
        'medical_service_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'appointment_datetime' => 'datetime',
        'reason' => 'string',
        'symptoms' => 'string',
        'notes' => 'string',
        'status' => AppointmentStatus::class,
        'type' => AppointmentType::class,
        'reminder_datetime' => 'datetime',
        'patient_id' => 'integer',
        'doctor_id' => 'integer',
        'medical_service_id'=> 'integer',
    ];

    /**
     * Get the patient associated with the appointment.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    /**
     * Get the doctor associated with the appointment.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    /**
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function visit(): HasOne
    {
        return $this->hasOne(Appointment::class);
    }

    public function medicalService(): BelongsTo
    {
        return $this->belongsTo(MedicalService::class);
    }

    public function newEloquentBuilder($query): AppointmentBuilder
    {
        return new AppointmentBuilder($query);
    }
}
