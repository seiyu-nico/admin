<?php

use Illuminate\Database\Seeder;
use App\Models\Attendance;
use Carbon\Carbon;


class AttendanceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $attendance = factory(Attendance::class, 1)->create();
        $create_cnt = 100;
        for ($i = $create_cnt; $i > 0; $i--){
            $now = Carbon::now();
            $date = $now->subDays($i);
            Attendance::create([
                'user_id' => 1,
                'start_date' => $date->format('Y-m-d'),
                'start_time' => '09:00:00',
                'end_date' => $date->format('Y-m-d'),
                'end_time' => '18:00:00',
            ]);
        }
    
    }
}
