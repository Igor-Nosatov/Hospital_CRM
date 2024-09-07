<?php

declare(strict_types=1);

namespace App\Models\PatientManagement;

use App\Models\MedicalStaff\Doctor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientMedicalTest extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'patient_medical_tests';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'date_of_medical_analysis',
        'title',
        'file_path',
        'disk',
        'mime_type',
        'file_hash',
        'collection',
        'size',
        'doctor_id',
        'patient_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'date_of_medical_analysis' => 'date',
        'title' => 'string',
        'file_path' => 'string',
        'disk' => 'string',
        'mime_type' => 'string',
        'file_hash' => 'string',
        'collection' => 'string',
        'size' => 'integer',
        'doctor_id' => 'integer',
        'patient_id' => 'integer',
    ];

    /**
     * Get the patient that owns the medical test.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    /**
     * Get the doctor that ordered the medical test.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }
}
