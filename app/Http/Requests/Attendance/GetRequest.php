<?php

namespace App\Http\Requests\Attendance;

use Illuminate\Foundation\Http\FormRequest;

class GetRequest extends FormRequest
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
            'id' => 'filled|integer|exists:attendances',
            'date' => 'filled|date_format:Y-m-d',
        ];
    }
    
    public function attributes()
    {
        return [
            'id' => 'ID',
            'sdate' => '出勤日',
        ];
    }
}
