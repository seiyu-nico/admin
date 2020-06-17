<?php

namespace App\Http\Requests\Attendance;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // TODO: バリデーションから
            'start_date' => 'filled|date_format:Y-m-d',
            'start_time' => 'filled|date_format:H:i',
            'end_date' => 'filled|date_format:Y-m-d',
            'end_time' => 'filled|date_format:H:i',
        ];
    }
    
    public function attributes()
    {
        return [
            'start_date' => '出勤日',
            'start_time' => '出勤時間',
            'end_date' => '退勤日',
            'end_time' => '退勤時間',
        ];
    }
}
