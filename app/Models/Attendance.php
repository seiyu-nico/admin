<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Attendance extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 
        'start_date', 
        'start_time',
        'end_date',
        'end_time',
    ];

    /**
     * リレーション
     */
     public function user()
     {
         return $this->belongsTo('App\Models\User');
     }
}
