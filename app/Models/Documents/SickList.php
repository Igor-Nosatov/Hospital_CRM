<?php

declare(strict_types=1);

namespace App\Models\Documents;

use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\Diagnosis;
use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class SickList
 *
 * @package App\Models\Documents
 *
 * @property int $id
 * @property string $description
 * @property \Illuminate\Support\Carbon $valid_until_date
 * @property int $diagnosis_id
 * @property int $receipt_id
 * @property int $patient_id
 * @property int $doctor_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read Diagnosis $diagnosis
 * @property-read Doctor $doctor
 * @property-read Patient $patient
 * @property-read Receipt $receipt
 */
class SickList extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'sick_lists';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description',
        'valid_until_date',
        'diagnosis_id',
        'receipt_id',
        'patient_id',
        'doctor_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'description' => 'string',
        'valid_until_date' => 'datetime',
        'diagnosis_id' => 'integer',
        'receipt_id' => 'integer',
        'patient_id' => 'integer',
        'doctor_id' => 'integer',
    ];

    /**
     * Get the patient that owns the sick list.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    /**
     * Get the doctor that owns the sick list.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    /**
     * Get the diagnosis that owns the sick list.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function diagnosis(): BelongsTo
    {
        return $this->belongsTo(Diagnosis::class);
    }

    /**
     * Get the receipt that owns the sick list.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function receipt(): BelongsTo
    {
        return $this->belongsTo(Receipt::class);
    }
}
