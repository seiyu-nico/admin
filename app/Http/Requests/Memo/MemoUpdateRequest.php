<?php

namespace App\Http\Requests\Memo;

use Illuminate\Foundation\Http\FormRequest;

class MemoUpdateRequest extends FormRequest
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
            'id' => 'required|exists:memos,id',
            'title' => 'required|max:255',
            'body' => 'required|max:255',
        ];
    }

    public function attributes()
    {
        return [
            'title' => 'タイトル',
            'body' => '内容',
        ];
    }
}
