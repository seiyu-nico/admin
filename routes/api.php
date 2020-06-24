<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// 登録
Route::post('/register', 'Api\Auth\RegisterController@register')->name('register');
// ログイン
Route::post('/login', 'Api\Auth\LoginController@login')->name('login');
// ログアウト
Route::post('/logout', 'Api\Auth\LoginController@logout')->name('logout');

// ログインユーザー
Route::get('/user', fn() => Auth::user())->name('user');

// メモ作成
Route::group(['middleware' => 'auth'], function() {
    Route::post('/memo', 'Api\MemoController@create')->name('memo.create');
    Route::get('/memo', 'Api\MemoController@index');
    Route::put('/memo', 'Api\MemoController@update');
    Route::delete('/memo', 'Api\MemoController@delete');
});

// 勤怠管理
Route::group(['middleware' => 'auth'], function() {
    Route::post('/attendance', 'Api\AttendanceController@create')->name('attendance.create');
    Route::get('/attendance', 'Api\AttendanceController@index');
    Route::put('/attendance', 'Api\AttendanceController@update');
    Route::delete('/attendance', 'Api\AttendanceController@delete');
    
    // リスト部分
    Route::get('/attendances', 'Api\AttendanceListController@index')->name('attendances.create');

    Route::post('/break-time', 'Api\BreakTimeController@create')->name('break_time.create');
    Route::put('/break-time', 'Api\BreakTimeController@update');
    Route::delete('/break-time', 'Api\BreakTimeController@delete');
});