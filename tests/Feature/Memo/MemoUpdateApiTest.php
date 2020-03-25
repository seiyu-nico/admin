<?php

namespace Tests\Feature\Memo;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Memo;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Log;

class MemoUpdateApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        // メモ用のユーザ作成
        $this->user = factory(User::class)->create();
        // テストメモ登録
        $this->memo = factory(Memo::class)->create();
    }


    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_メモを修正できる()
    {
        $data = [
            'id' => $this->memo->id,
            'title' => 'メモ編集タイトル',
            'body' => 'メモ編集本文',
        ];

        $response = $this->actingAs($this->user)
                         ->json('PUT', route('memo.create'), $data);

        // 作成した1件目を取得
        $memo = Memo::find($this->memo->id);

        // レスポンスが200であること
        $response->assertStatus(200)
                ->assertJson(['id' => $this->memo->id])
                ->assertJson(['title' => $data['title']])
                ->assertJson(['body' => $data['body']]);

    }
}
