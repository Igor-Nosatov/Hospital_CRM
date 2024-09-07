<?php

declare (strict_types = 1);

namespace App\Models\MedicalStaff;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class MedicalEventFeedback
 *
 * @package App\Models\MedicalStaff
 *
 * @property int $id
 * @property int $overall_quality
 * @property int $meet_expectations
 * @property string|null $useful_topics
 * @property int $material_quality
 * @property bool $schedule_convenience
 * @property int $organization_quality
 * @property string|null $fav_sessions
 * @property int $speaker_competence
 * @property string|null $disappointed_sessions
 * @property int $medical_event_id
 * @property int $doctor_id
 *
 * @property-read \App\Models\MedicalStaff\MedicalEvent $medicalEvent
 * @property-read \App\Models\MedicalStaff\Doctor $doctor
 */
class MedicalEventFeedback extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'medical_event_feedback';

    protected $fillable = [
        'overall_quality',
        'meet_expectations',
        'useful_topics',
        'material_quality',
        'schedule_convenience',
        'organization_quality',
        'fav_sessions',
        'speaker_competence',
        'disappointed_sessions',
        'medical_event_id',
        'doctor_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'overall_quality' => 'integer',
        'meet_expectations' => 'integer',
        'useful_topics' => 'string',
        'material_quality' => 'integer',
        'schedule_convenience' => 'boolean',
        'organization_quality' => 'integer',
        'fav_sessions' => 'string',
        'speaker_competence' => 'integer',
        'disappointed_sessions' => 'string',
        'medical_event_id' => 'integer',
        'doctor_id' => 'integer',
    ];

    /**
     * Get the medical event associated with the feedback.
     */
    public function medicalEvent(): BelongsTo
    {
        return $this->belongsTo(MedicalEvent::class);
    }

    /**
     * Get the doctor who provided the feedback.
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }
}
