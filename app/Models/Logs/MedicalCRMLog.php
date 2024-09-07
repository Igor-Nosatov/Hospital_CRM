<?php

namespace App\Models\Logs;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalCRMLog extends Model
{
    use HasFactory;

    protected $connection = 'mongodb';
    protected $collection = 'logs';

    protected $fillable = [
        'action',
        'user_id',
        'model',
        'model_id',
        'timestamp',
        'ip_address',
        'additional_data',
    ];

    protected $casts = [
        'timestamp' => 'datetime',
    ];
}
