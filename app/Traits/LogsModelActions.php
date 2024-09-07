<?php

declare(strict_types=1);

namespace App\Traits;
use App\Jobs\LogModelActionJob;
use Illuminate\Support\Facades\Auth;

trait LogsModelActions
{
    private function logAction($action, $model, $additionalData = [])
    {
        $logData = array_merge([
            'action' => $action,
            'user_id' => Auth::id(),
            'model' => get_class($model),
            'model_id' => $model->id,
            'timestamp' => now(),
            'ip_address' => request()->ip(),
        ], $additionalData);

        dispatch(new LogModelActionJob ($logData));
    }

    public function logCreate($model)
    {
        $this->logAction('create', $model, [
            'new_data' => $model->toArray(),
        ]);
    }

    public function logUpdate($model)
    {
        $this->logAction('update', $model, [
            'old_data' => $model->getOriginal(),
            'new_data' => $model->getChanges(),
        ]);
    }

    public function logDelete($model)
    {
        $this->logAction('delete', $model);
    }

    public function logRestore($model)
    {
        $this->logAction('restore', $model, [
            'restored_data' => $model->toArray(),
        ]);
    }
}

