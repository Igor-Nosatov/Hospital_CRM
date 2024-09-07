<?php

declare (strict_types = 1);

namespace App\Models\PatientManagement;

use App\Builders\PatientDocBuilder;
use App\Enums\PatientDocType;
use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientDoc extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'patient_docs';

    protected $fillable = [
        'title',
        'document_type',
        'document_name',
        'mime_type',
        'disk',
        'file_hash',
        'collection',
        'size',
        'patient_id',
        'doctor_id',
    ];

    protected $casts = [
        'title' => 'string',
        'document_type' => PatientDocType::class,
        'document_name' => 'string',
        'mime_type' => 'string',
        'path' => 'string',
        'disk' => 'string',
        'file_hash' => 'string',
        'collection' => 'string',
        'size' => 'integer',
        'patient_id' => 'integer',
        'doctor_id' => 'integer',
    ];

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function newEloquentBuilder($query): PatientDocBuilder
    {
        return new PatientDocBuilder($query);
    }
}
