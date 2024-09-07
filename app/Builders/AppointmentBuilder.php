<?php

declare (strict_types = 1);

namespace App\Builders;

use Illuminate\Database\Eloquent\Builder;

class AppointmentBuilder extends Builder
{
    public function __construct($query)
    {
        parent::__construct($query);
    }

    public function search(?string $search)
    {
        return $this->when($search !== null, function ($q) use ($search) {
            $q->where('reason', 'LIKE', '%' . $search . '%');
        });
    }
}
