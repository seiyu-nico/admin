<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Attendance;
use Faker\Generator as Faker;

$factory->define(Attendance::class, function (Faker $faker) {
    // 60日前までデータを作成
    $create_cnt = 60;
    
    for ($i = $create_cnt; $i > 0; $i--){
        $scheduled_date = $faker->dateTimeBetween('-' . $i .'day', '-' . $i .'day');
        $data = [
            'user_id' => 1,
            'start_date' => $scheduled_date->format('Y-m-d'),
            'start_time' => '09:00:00',
            'end_date' => $scheduled_date->format('Y-m-d'),
            'end_time' => '18:00:00',
        ];
            
    }
            

    return $data;
});
