<?php

namespace Tests\Feature\Memo;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Memo;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\MemoRequest;

class MemoRegistApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        // メモ用のユーザ作成
        $this->user = factory(User::class)->create();
    }


    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_メモを登録できる()
    {
        $data = [
            'title' => 'タイトル',
            'body' => '本文',
        ];

        $response = $this->actingAs($this->user)
                         ->json('POST', route('memo.create'), $data);

        // 作成した1件目を取得
        $memo = Memo::find(1);

        // レスポンスが201(CREATED)であること
        $response->assertStatus(201)
                ->assertJson(['title' => $memo->title])
                ->assertJson(['body' => $memo->body]);
        
    }

    // バリデーションのテストを今度書く

}
