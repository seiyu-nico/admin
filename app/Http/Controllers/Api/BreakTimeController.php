<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BreakTime;
use Auth;
use Log;


class BreakTimeController extends Controller
{
    //
    public function create(Request $request)
    {
        $user = Auth::user();
        $data = $request->all();
        $data['user_id'] = $user->id;
        $break_time = BreakTime::create($data);
        return response($break_time, 201);
    }

    public function update(Request $request)
    {
        $break_time = BreakTime::find($request->id);
        $break_time->update($request->all());
        return response($break_time, 200);
    }
    

}
