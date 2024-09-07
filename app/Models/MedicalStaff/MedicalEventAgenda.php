<?php

declare (strict_types = 1);

namespace App\Models\MedicalStaff;

use App\Models\MedicalStaff\MedicalEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalEventAgenda extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'medical_event_agendas';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'time',
        'session',
        'description',
        'medical_event_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'title' => 'string',
        'time' => 'datetime',
        'session' => 'string',
        'description' => 'string',
        'medical_event_id' => 'integer',
    ];

    /**
     * Get the medical event associated with the agenda.
     */
    public function medicalEvent(): BelongsTo
    {
        return $this->belongsTo(MedicalEvent::class);
    }
}
