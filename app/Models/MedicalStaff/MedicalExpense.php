<?php

declare(strict_types=1);

namespace App\Models\MedicalStaff;

use App\Enums\MedicalExpenseType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalExpense extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'medical_expenses';

    protected $fillable = [
        'medical_expense_type',
        'amount',
        'doctor_id',
    ];

    protected $casts = [
        'medical_expense_type' => MedicalExpenseType::class,
        'amount' => 'integer',
        'doctor_id' => 'integer',
    ];

    public function doctor():BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }
}
