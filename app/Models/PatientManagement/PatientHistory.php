<?php

declare(strict_types=1);

namespace App\Models\PatientManagement;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientHistory extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'patient_histories';

    protected $fillable = [
        'date_of_onset',
        'diagnosis',
        'symptoms',
        'treatment',
        'previous_interventions',
        'test_results',
        'progress',
        'notes',
        'patient_id'
    ];

    protected $casts = [
        'date_of_onset' => 'date',
        'symptoms' => 'string',
        'treatment' => 'string',
        'previous_interventions' => 'string',
        'test_results' => 'string',
        'progress' => 'string',
        'notes' => 'string',
        'patient_id' => 'int',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }
}
