<?php

declare (strict_types = 1);

namespace App\Models\Documents;

use App\Enums\ReceiptStatus;
use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Receipt
 *
 * @package App\Models\Documents
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon $valid_until_date
 * @property string $barcode
 * @property string $status
 * @property int $patient_id
 * @property int $doctor_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read Doctor $doctor
 * @property-read Patient $patient
 */
class Receipt extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'receipts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'valid_until_date',
        'barcode',
        'status',
        'patient_id',
        'doctor_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'valid_until_date' => 'date',
        'barcode' => 'string',
        'status' => ReceiptStatus::class,
        'patient_id' => 'integer',
        'doctor_id' => 'integer',
    ];

    /**
     * Get the doctor that owns the receipt.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    /**
     * Get the patient that owns the receipt.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

}
