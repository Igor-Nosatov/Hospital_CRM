<?php

declare(strict_types=1);

namespace App\Services\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\StoreMedicalEventDTO;
use App\Models\MedicalStaff\MedicalEvent;
use App\Models\MedicalStaff\MedicalEventAgenda;

class MedicalEventService
{
    public function index(): array
    {
        $medicalEvents = MedicalEvent::select('id', 'name', 'organizer', 'event_date', 'language', 'url_img', 'medical_event_type')
            ->paginate(8);

        $medical_event_data = $medicalEvents->map(fn($event) => [
            'title' => $event->name,
            'event_id' => $event->id,
            'lector_photo' => $event->url_img,
            'medical_event_type' => $event->medical_event_type,
            'lecturer' => $event->organizer,
            'event_organizer' => $event->organizer,
            'event_date' => $event->event_date->format('d-m-Y'),
            'language' => $event->language,
        ]);

        $meta = $medicalEvents->toArray();

        return [
            'medical_event_data' => $medical_event_data,
            'meta' => [
                'total' => $meta['total'],
                'per_page' => $meta['per_page'],
                'current_page' => $meta['current_page'],
                'last_page' => $meta['last_page'],
                'next_page_url' => $meta['next_page_url'],
                'prev_page_url' => $meta['prev_page_url'],
            ],
        ];
    }

    public function show($medicalEvent): array
    {
        $agendaItems = MedicalEventAgenda::where('medical_event_id', $medicalEvent->id)
            ->select([
                'id',
                'title',
                'time',
                'session',
                'description',
            ])->take(5)->latest()->get();

        return [
            'medical_event_agenda' => $agendaItems,
            'medical_event_id' => $medicalEvent->id,
        ];
    }

    public function storeEventRegister(StoreMedicalEventDTO $dto): MedicalEvent
    {
        return MedicalEvent::create($dto->toArray());
    }
}
