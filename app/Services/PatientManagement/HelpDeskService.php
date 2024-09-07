<?php

declare (strict_types = 1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\HelpDeskDto;
use App\Models\PatientManagement\HelpDesk;
class HelpDeskService
{
    public function store(HelpDeskDto $dto): HelpDesk
    {
        return HelpDesk::create($dto->toArray());
    }
}
