<?php

declare (strict_types = 1);

namespace App\Models\PatientManagement;

use App\Builders\MeetingBuilder;
use App\Models\MedicalStaff\Doctor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Meeting
 *
 * @package App\Models\PatientManagement
 *
 * @property int $id
 * @property string $description
 * @property string $result
 * @property string $written_entities
 * @property \DateTime $date
 * @property int $patient_id
 * @property int $doctor_id
 * @property int $service_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read VideoCall[] $videoCalls
 * @property-read Patient $patient
 * @property-read Doctor $doctor
 * @property-read Service $service
 */
class Meeting extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'meetings';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description',
        'result',
        'written_entities',
        'date',
        'appointment_id',
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
        'result' => 'string',
        'written_entities' => 'string',
        'date' => 'datetime',
        'appointment_id' => 'integer',
        'patient_id' => 'integer',
        'doctor_id' => 'integer',
    ];

    /**
     * Get the video calls associated with the meeting.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function videoCalls(): HasMany
    {
        return $this->hasMany(VideoCall::class);
    }

    /**
     * Get the patient associated with the meeting.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    /**
     * Get the doctor associated with the meeting.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function newEloquentBuilder($query): MeetingBuilder
    {
        return new MeetingBuilder($query);
    }
}
