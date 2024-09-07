<?php

declare (strict_types = 1);

namespace App\Models\PatientManagement;

use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\Payment;
use App\Models\PatientManagement\Diagnose;
use App\Models\PatientManagement\Insurance;
use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class PatientVisit
 *
 * @package App\Models
 *
 * @property int $id
 * @property \DateTime $visit_date
 * @property array $complaints
 * @property array $symptoms
 * @property array $treatment
 * @property array $notes
 * @property int $diagnose_id
 * @property int $payment_id
 * @property int $patient_id
 * @property int $doctor_id
 * @property int $insurance_id
 * @property \DateTime $created_at
 * @property \DateTime $updated_at
 * @property \DateTime $deleted_at
 *
 * @property-read Diagnose $diagnose
 * @property-read Payment $payment
 * @property-read Patient $patient
 * @property-read Doctor $doctor
 * @property-read Insurance $insurance
 */
class PatientVisit extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'complaints',
        'symptoms',
        'treatment',
        'notes',
        'diagnose_id',
        'payment_id',
        'patient_id',
        'doctor_id',
        'insurance_id',
        'appointment_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'complaints' => 'string',
        'symptoms' => 'string',
        'treatment' => 'string',
        'notes' => 'string',
        'diagnose_id' => 'integer',
        'payment_id' => 'integer',
        'patient_id' => 'integer',
        'doctor_id' => 'integer',
        'insurance_id' => 'integer',
        'appointment_id' => 'integer',
    ];

    /**
     * Get the diagnose associated with the patient visit.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function diagnose(): BelongsTo
    {
        return $this->belongsTo(Diagnose::class);
    }

    /**
     * Get the payment associated with the patient visit.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function payment(): BelongsTo
    {
        return $this->belongsTo(Payment::class);
    }

    /**
     * Get the patient associated with the patient visit.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    /**
     * Get the doctor associated with the patient visit.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    /**
     * Get the insurance associated with the patient visit.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function insurance(): BelongsTo
    {
        return $this->belongsTo(Insurance::class);
    }

    /**
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function appointment(): BelongsTo
    {
        return $this->belongsTo(Appointment::class);
    }
}
