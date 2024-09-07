<?php

declare(strict_types=1);

namespace App\Models\MedicalStaff;

use App\Enums\SettingStatus;
use App\Enums\SettingType;
use App\Models\PatientManagement\Meeting;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Setting
 *
 * @package App\Models\MedicalStaff
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $price
 * @property string|null $rules_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 */
class Setting extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'settings';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'setting_name',
        'setting_status',
        'setting_type',
        'setting_desc'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'setting_name' => 'string',
        'setting_status' => SettingStatus::class,
        'setting_type'=> SettingType::class,
        'setting_desc'=> 'string',
    ];

    /**
     * Get the meetings associated with the service.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function meetings(): HasMany
    {
        return $this->hasMany(Meeting::class);
    }
}
