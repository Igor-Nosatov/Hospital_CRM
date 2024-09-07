<?php

declare (strict_types = 1);

namespace App\Models\MedicalStaff;

use App\Enums\MedicalEventType;
use App\Models\MedicalStaff\MedicalEventAgenda;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalEvent extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'medical_events';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'organizer',
        'event_date',
        'medical_event_type',
        'language',
        'url_img',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'organizer' => 'string',
        'medical_event_type' =>  MedicalEventType::class,
        'event_date' => 'date',
        'language' => 'string',
        'url_img' => 'string',
    ];

    public function medicalEventAgenda(): HasMany
    {
        return $this->hasMany(MedicalEventAgenda::class);
    }

    public function medicalEventFeedback(): HasMany
    {
        return $this->hasMany(MedicalEventFeedback::class);
    }

    public function doctors(): BelongsToMany
    {
        return $this->belongsToMany(Doctor::class, 'doctor_medical_event');
    }
}
