<?php

use Illuminate\Database\Seeder;
use App\Models\User;

/**
 * 実行方法
 * php artisan db:seed --class=UserTableSeeder
 */

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 全部消す 　
        DB::table('users')->delete();
        // 開発用のユーザー追加
        User::create([ 
                'given_name' => '優聖',
                'last_name' => '石井',
                'nickname' => 'せぃゆー',
                'email' => 'yuseiishii141@gmail.com',
                'password' => Hash::make('141yusei'),
                ]);
    

    }
}
