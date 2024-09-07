<?php
declare(strict_types=1);

namespace App\Services\MedicalStaff;

use App\Models\MedicalStaff\DoctorNotification;
use Illuminate\Pagination\LengthAwarePaginator;

class NotificationService
{
    public function index(): array
    {
        $notifications = DoctorNotification::query()->select('title', 'message', 'read')->paginate(5);

        return $this->formatResponse($notifications);
    }

    private function formatResponse(LengthAwarePaginator $notifications): array
    {
        $data = $notifications->items();
        $meta = [
            'current_page' => $notifications->currentPage(),
            'last_page_url' => $notifications->url($notifications->lastPage()),
            'next_page_url' => $notifications->nextPageUrl(),
            'path' => $notifications->path(),
            'from' => $notifications->firstItem(),
            'last_page' => $notifications->lastPage(),
            'per_page' => $notifications->perPage(),
            'prev_page_url' => $notifications->previousPageUrl(),
            'to' => $notifications->lastItem(),
            'total' => $notifications->total(),
        ];

        return [
            'notification_data' => $data,
            'meta' => $meta,
        ];
    }
}
