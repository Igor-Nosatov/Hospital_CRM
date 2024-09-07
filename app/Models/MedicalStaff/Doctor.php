<?php

declare (strict_types = 1);

namespace App\Models\MedicalStaff;

use App\Enums\DoctorStatus;
use App\Models\Auth\User;
use App\Models\Documents\Receipt;
use App\Models\Documents\SickList;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\DoctorReview;
use App\Models\PatientManagement\Meeting;
use App\Models\PatientManagement\Patient;
use App\Models\PatientManagement\PatientMedicalTest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Doctor extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'doctors';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'working_mode',
        'first_name',
        'last_name',
        'date_of_birth',
        'religion',
        'address',
        'phone_number',
        'home_number',
        'other_phone_number',
        'marital_status',
        'status',
        'biography',
        'education',
        'experience',
        'languages',
        'current_location',
        'certifications',
        'medical_license',
        'professional_memberships',
        'awards',
        'publications',
        'research_interests',
        'country_id',
        'speciality_id',
        'department_id',
        'user_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'working_mode' => 'string',
        'first_name' => 'string',
        'last_name' => 'string',
        'date_of_birth' => 'date',
        'religion' => 'string',
        'address' => 'string',
        'phone_number' => 'string',
        'home_number' => 'string',
        'other_phone_number' => 'string',
        'marital_status' => 'string',
        'status' => DoctorStatus::class,
        'biography' => 'string',
        'education' => 'array',
        'experience' => 'array',
        'languages' => 'array',
        'current_location' => 'array',
        'certifications' => 'array',
        'medical_license' => 'array',
        'professional_memberships' => 'array',
        'awards' => 'array',
        'publications' => 'array',
        'research_interests' => 'array',
        'department_id' => 'int',
        'country_id' => 'int',
        'speciality_id' => 'int',
        'user_id' => 'int',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patients(): HasMany
    {
        return $this->hasMany(Patient::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the receipts associated with the doctor.
     */
    public function receipts(): HasMany
    {
        return $this->hasMany(Receipt::class);
    }

    public function speciality(): BelongsTo
    {
        return $this->belongsTo(Speciality::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(DoctorReview::class);
    }

    public function sickLists(): HasMany
    {
        return $this->hasMany(SickList::class);
    }

    public function meetings(): HasMany
    {
        return $this->hasMany(Meeting::class);
    }

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }

    public function medicalEvents(): HasMany
    {
        return $this->HasMany(MedicalEvent::class);
    }

    public function doctorNotifications(): HasMany
    {
        return $this->hasMany(DoctorNotification::class);
    }

    public function doctorPhoto(): HasMany
    {
        return $this->hasMany(DoctorPhoto::class);
    }

    public function medicalExpenses(): HasMany
    {
        return $this->hasMany(MedicalExpense::class);
    }

    public function medicalEventFeedback(): HasMany
    {
        return $this->hasMany(MedicalEventFeedback::class);
    }

    public function patientTests(): HasMany
    {
        return $this->hasMany(PatientMedicalTest::class);
    }
}
