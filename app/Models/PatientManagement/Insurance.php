<?php

declare(strict_types=1);

namespace App\Models\PatientManagement;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Insurance extends Model
{
    use HasFactory, SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'insurances';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'insurance_name',
        'policy_number',
        'start_date',
        'end_date',
        'policy_holder_name',
        'policy_holder_relationship',
        'contact_number',
        'premium_amount',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'insurance_name' => 'string',
        'policy_number' => 'string',
        'start_date' => 'date',
        'end_date' => 'date',
        'policy_holder_name' => 'integer',
        'policy_holder_relationship' => 'string',
        'contact_number' => 'string',
        'premium_amount' => 'integer',
    ];


    /**
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function patient(): HasMany
    {
        return $this->hasMany(Patient::class);
    }
}
