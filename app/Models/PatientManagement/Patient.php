<?php

declare(strict_types=1);

namespace App\Models\PatientManagement;

use App\Builders\PatientBuilder;
use App\Enums\MaritalStatus;
use App\Enums\PatientStatus;
use App\Models\PatientManagement\Appointment;
use App\Models\Documents\Receipt;
use App\Models\Documents\SickList;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\Payment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;


class Patient extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'patients';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'date_of_birth',
        'religion',
        'occupation',
        'address',
        'phone_number',
        'email',
        'identity_code',
        'status',
        'marital_status',
        'insurance_id',
        'patient_id',
        'doctor_id',
        'patient_history_id',
        'patient_test_id',
        'legal_representative_first_name',
        'legal_representative_last_name',
        'legal_representative_relationship',
        'legal_representative_phone_number',
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'first_name' => 'string',
        'last_name' => 'string',
        'date_of_birth'=> 'date',
        'religion' => 'string',
        'occupation' => 'string',
        'address' => 'string',
        'phone_number' => 'string',
        'email' => 'string',
        'identity_code' => 'string',
        'legal_representative_first_name'=> 'string',
        'legal_representative_last_name'=> 'string',
        'legal_representative_relationship'=> 'string',
        'legal_representative_phone_number'=> 'string',
        'marital_status'=> MaritalStatus::class,
        'status' => PatientStatus::class,
        'insurance_id' => 'int',
        'doctor_id' => 'int',
    ];

    /**
     * Get the receipts associated with the patient.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function receipts(): HasMany
    {
        return $this->hasMany(Receipt::class);
    }

    /**
     * Get the reviews written by the patient for doctors.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(DoctorReview::class);
    }

    /**
     * Get the sick lists associated with the patient.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sickLists(): HasMany
    {
        return $this->hasMany(SickList::class);
    }

    /**
     * Get the payments made by the patient.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    /**
     * Get the meetings associated with the patient.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function meetings(): HasMany
    {
        return $this->hasMany(Meeting::class);
    }

    /**
     * Get the legal representatives with the patient.
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
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    /**
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }

    /**
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function patientVisits(): HasMany
    {
        return $this->hasMany(PatientVisit::class);
    }

    public function newEloquentBuilder($query): PatientBuilder
    {
        return new PatientBuilder($query);
    }

    public function patientHistory(): HasMany
    {
        return $this->hasMany(PatientHistory::class);
    }

    public function patientTests(): HasMany
    {
        return $this->hasMany(PatientMedicalTest::class);
    }

    public function physicalExaminations(): HasMany
    {
        return $this->hasMany(PhysicalExamination::class);
    }

    public function treatmentPlans(): HasMany
    {
        return $this->hasMany(TreatmentPlan::class);
    }

    public function patientPhoto(): HasMany
    {
      return $this->hasMany(PatientPhoto::class);
    }
}
