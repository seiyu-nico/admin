<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBreakTimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('break_times', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->unsigned()->comment('users.id');
            $table->bigInteger('attendance_id')->unsigned()->comment('attendances.id');
            $table->date('start_date')->nullable()->comment('出勤日');
            $table->time('start_time')->nullable()->comment('出勤時間');
            $table->date('end_date')->nullable()->comment('退勤日');
            $table->time('end_time')->nullable()->comment('退勤時間');
            
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('attendance_id')->references('id')->on('attendances')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_break_times');
    }
}
