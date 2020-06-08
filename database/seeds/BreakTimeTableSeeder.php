<?php

use Illuminate\Database\Seeder;
use App\Models\Attendance;
use App\Models\BreakTime;
use Carbon\Carbon;

/**
 * 実行方法
 * php artisan db:seed --class=BreakTimeTableSeeder
 */

class BreakTimeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $attendance = factory(Attendance::class, 1)->create();
        $attendance = attendance::latest()->limit(1)->first();
        var_dump($attendance);
        
        BreakTime::create([
            'user_id' => $attendance['user_id'],
            'attendance_id' => $attendance['id'],
            'start_date' => $attendance['start_date'],
            'start_time' => '10:00:00',
            'end_date' => $attendance['start_date'],
            'end_time' => '11:00:00',
        ]);
        BreakTime::create([
            'user_id' => $attendance['user_id'],
            'attendance_id' => $attendance['id'],
            'start_date' => $attendance['start_date'],
            'start_time' => '12:00:00',
            'end_date' => $attendance['start_date'],
            'end_time' => '13:00:00',
        ]);

    }
}
