<?php

declare (strict_types = 1);

namespace App\Policies\Api\V1\PatientManagement;

use App\Models\Auth\User;
use App\Models\PatientManagement\PatientVisit;

class PatientVisitPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, PatientVisit $patientVisit): bool
    {
        return $user->doctor && $user->doctor->id === $patientVisit->getAttribute('doctor_id') || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasRole('doctor') || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, PatientVisit $patientVisit): bool
    {
        return $user->doctor && $user->doctor->id === $patientVisit->getAttribute('doctor_id') || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, PatientVisit $patientVisit): bool
    {
        return $user->doctor && $user->doctor->id === $patientVisit->getAttribute('doctor_id') || $user->hasRole('admin');
    }
}
