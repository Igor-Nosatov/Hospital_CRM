<?php

declare(strict_types=1);

namespace App\Services\Documents;

use App\DataTransferObjects\Documents\SickListDto;
use App\Models\Documents\SickList;
use Illuminate\Database\Eloquent\Collection;

class SickListService {
    public function index():Collection
    {
        return SickList::get();
    }

    public function show($sickList):Collection
    {
        return SickList::with(['user'])->find($sickList);
    }

    public function store(SickListDto $dto): SickList
    {
        return SickList::create($dto->toArray());
    }

    public function update(SickListDto $dto, SickList $sickList): SickList
    {
        $sickList->update($dto->toArray());
        return $sickList;
    }

    public function destroy(SickList $sickList): void
    {
        $sickList->delete();
    }
}
