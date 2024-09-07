<?php

declare(strict_types=1);

namespace App\Models\PatientManagement;

use App\Models\Documents\SickList;
use App\Models\PatientManagement\PatientVisit;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Diagnose
 *
 * @package App\Models\PatientManagement
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read SickList[] $diagnosis
 */
class Diagnose extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'diagnoses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string',
    ];

    /**
     * Get the sick lists associated with the diagnosis.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function diagnose(): HasMany
    {
        return $this->hasMany(SickList::class);
    }

    /**
     * Get the sick lists associated with the diagnosis.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function patientVisit(): HasMany
    {
        return $this->hasMany(PatientVisit::class);
    }
}
