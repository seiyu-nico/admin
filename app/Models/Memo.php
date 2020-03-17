<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Memo extends Model
{
    use SoftDeletes;

    protected $fillable = ['user_id', 'title', 'body'];

    /**
     * リレーション
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
