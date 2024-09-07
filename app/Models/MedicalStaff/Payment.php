<?php

declare(strict_types=1);

namespace App\Models\MedicalStaff;

use App\Enums\CurrencyType;
use App\Enums\PaymentStatus;
use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Payment
 *
 * @package App\Models\MedicalStaff
 *
 * @property int $id
 * @property string $description
 * @property int $patient_id
 * @property int $payment_type_id
 * @property int $service_id
 * @property int $payment_status_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\PatientManagement\Patient $patient
 */
class Payment extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'payments';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'amount',
        'payment_date',
        'payment_status',
        'payment_method',
        'transaction_id',
        'card_expiry_date',
        'comments',
        'currency',
        'patient_id',
        'doctor_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'amount' => 'integer',
        'payment_date' => 'datetime',
        'payment_status' =>  PaymentStatus::class,
        'payment_method' => 'string',
        'transaction_id' => 'string',
        'card_expiry_date' => 'datetime',
        'comments' => 'string',
        'currency' =>  CurrencyType::class,
        'patient_id' => 'integer',
        'doctor_id' => 'integer',
    ];

    /**
     * Get the doctor that owns the payment.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }

    /**
     * Get the patient that owns the payment.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }
}
