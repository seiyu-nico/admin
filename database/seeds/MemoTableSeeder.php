<?php

use Illuminate\Database\Seeder;
use App\Models\Memo;

class MemoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $memo = factory(Memo::class, 10)->create();
    }
}
