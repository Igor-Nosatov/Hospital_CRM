<?php

declare(strict_types=1);

namespace App\Services\Documents;

use App\DataTransferObjects\Documents\ReceiptDto;
use App\Models\Documents\Receipt;
use Illuminate\Database\Eloquent\Collection;

class ReceiptService {
    public function index():Collection
    {
        return Receipt::get();
    }

    public function show($receipt):Collection
    {
        return Receipt::with(['user'])->find($receipt);
    }

    public function store(ReceiptDto $dto): Receipt
    {
        return Receipt::create($dto->toArray());
    }

    public function update(ReceiptDto $dto, Receipt $receipt): Receipt
    {
        $receipt->update($dto->toArray());
        return $receipt;
    }

    public function destroy(Receipt $receipt): void
    {
        $receipt->delete();
    }
}
