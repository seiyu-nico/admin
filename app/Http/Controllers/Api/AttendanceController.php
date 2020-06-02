<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use Auth;
use Log;

class AttendanceController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request)
    {
        $user = Auth::user();
        $date = $request->date;
        $attendance = Attendance::where('user_id', $user->id)->where('start_date', $date)->first();
        return response($attendance, 200);
    }

    public function create(Request $request)
    {
        $user = Auth::user();
        $data = $request->all();
        $data['user_id'] = $user->id;
        $attendance = Attendance::create($data);
        return response($attendance, 201);
    }

    public function update(Request $request)
    {
        $attendance = Attendance::find($request->id);
        Log::info($request->all());
        $attendance->update($request->all());
        Log::info($attendance);
        return response($attendance, 200);
    }
    
    public function delete(Request $request)
    {
        // Memo::find($request->id)->delete();
        // return response(null, 204);
    }
}
