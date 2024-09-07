<?php

declare (strict_types = 1);

namespace App\Builders;

use Illuminate\Database\Eloquent\Builder;

class PatientBuilder extends Builder
{
    public function __construct($query)
    {
        parent::__construct($query);
    }

    public function search(?string $search)
    {
        return $this->when($search !== null, function ($q) use ($search) {
            $q->where('first_name', 'LIKE', '%' . $search . '%')
                ->orWhere('last_name', 'LIKE', '%' . $search . '%')
                ->orWhereRaw('CONCAT(`first_name`, " ", `last_name`) LIKE ?', ['%' . $search . '%']);
        });
    }
}
