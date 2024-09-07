<?php

declare (strict_types = 1);

namespace App\Models\MedicalStaff;

use App\Models\PatientManagement\Appointment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalService extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'medical_services';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'price'
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
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function patient(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}
