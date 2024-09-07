<?php

declare (strict_types = 1);

namespace App\Models\MedicalStaff;

use App\Models\MedicalStaff\Doctor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class DoctorNotification extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'message',
        'read',
        'doctor_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'title'=> 'string',
        'message'=> 'string',
        'read' => 'boolean',
        'doctor_id' => 'integer',
    ];

    /**
     * Get the doctor that owns the notification.
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }
}
