<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Memo;
use Faker\Generator as Faker;

$factory->define(Memo::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'title' => $faker->word,
        'body' => $faker->sentence,
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
