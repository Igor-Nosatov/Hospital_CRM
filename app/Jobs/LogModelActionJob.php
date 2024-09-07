<?php

namespace App\Jobs;

use App\Models\Logs\MedicalCRMLog;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class LogModelActionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $logData;

    public function __construct(array $logData)
    {
        $this->logData = $logData;
    }

    public function handle()
    {
        MedicalCRMLog::create($this->logData);
    }
}
