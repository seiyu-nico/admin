<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use Auth;
use Log;

class AttendanceListController extends Controller
{
    public function __construct()
    {
    }

    /**
     * 勤務時間と休憩時間のリストを返す
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        $attendances = Attendance::with('break_time')
                                ->where('user_id', $user->id)
                                ->where('start_date', '>=', $request->start)
                                ->where('end_date', '<=', $request->end)
                                ->orderBy('start_date', 'asc')
                                ->get();
        return response($attendances, 200);
    }
}
