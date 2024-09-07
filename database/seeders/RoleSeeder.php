<?php

namespace Database\Seeders;

use App\Models\Auth\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::insert([
            [
                'name' => 'admin',
                'display_name' => 'Administrator',
                'description' => 'Has access to all administrative functions',
            ],
            [
                'name' => 'doctor',
                'display_name' => 'Doctor',
                'description' => 'Has access to manage specific resources',
            ],
        ]);
    }
}
