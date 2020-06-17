<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Attendance AS RA;
use App\Models\Attendance;
use Auth;
use Carbon\Carbon;
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
        // なければ作成
        if (NULL === $attendance) {
            $attendance = Attendance::create([
                'user_id' => $user->id,
                'start_date' => Carbon::now()->format('Y-m-d'),
                'end_date' => Carbon::now()->format('Y-m-d'),
            ]);
        }
        $break_times = ($attendance) ? $attendance->break_time : [];
        return response(['attendance' => $attendance, 'break_times' => $break_times], 200);
    }

    public function create(RA\CreateRequest $request)
    {
        $user = Auth::user();
        $data = $request->all();
        $data['user_id'] = $user->id;
        $attendance = Attendance::create($data);
        return response($attendance, 201);
    }

    public function update(RA\UpdateRequest $request)
    {
        $attendance = Attendance::find($request->id);
        $attendance->update($request->all());
        return response($attendance, 200);
    }
    
    public function delete(Request $request)
    {
        // Memo::find($request->id)->delete();
        // return response(null, 204);
    }
}
