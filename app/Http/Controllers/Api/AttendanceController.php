<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use Auth;

class AttendanceController extends Controller
{
    
    public function __construct()
    {
    }

    public function index()
    {
        $user = Auth::user();
        return $user->attendance;
    }

    public function create(MemoRequest $request)
    {
        // $user = Auth::user();
        // $data = $request->all();
        // $data['user_id'] = $user->id;
        // $memo = Memo::create($data);
        // return response($memo, 201);
    }

    public function update(MemoUpdateRequest $request)
    {
        // $memo = Memo::find($request->id);
        // $memo->update($request->all());
        // return response($memo, 200);
    }
    
    public function delete(MemoDeleteRequest $request)
    {
        // Memo::find($request->id)->delete();
        // return response(null, 204);
    }
}
