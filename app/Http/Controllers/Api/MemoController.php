<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\MemoRequest;
use App\Models\Memo;
use Auth;
use Log;

class MemoController extends Controller
{
    
    public function __construct()
    {
    }

    public function index()
    {
        $user = Auth::user();
        return $user->memo;

    }

    public function create(MemoRequest $request)
    {
        $user = Auth::user();
        $data = $request->all();
        $data['user_id'] = $user->id;
        $memo = Memo::create($data);
        return response($memo, 201);
    }
}
