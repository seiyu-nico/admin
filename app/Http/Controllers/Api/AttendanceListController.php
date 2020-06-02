<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use Auth;

class AttendanceListController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request)
    {
        $user = Auth::user();
        $attendance = $user->attendance;
        return response($attendance, 200);
    }
}
