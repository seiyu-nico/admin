<?php

namespace Tests\Feature\Memo;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Memo;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class MemoDeleteApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        // メモ用のユーザ作成
        $this->user = factory(User::class)->create();
        // メモ登録
        $this->memo = factory(Memo::class)->create();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_メモを削除できる()
    {
        $data = [
            'id' => $this->memo->id,
        ];
        
        $response = $this->actingAs($this->user)
                         ->json('delete', route('memo.create'), $data);


        // レスポンスが204であること
        $response->assertStatus(204);
        // memos.id = $this->memo->idがソフトデリートされているかどうか
        $this->assertSoftDeleted('memos', [
                    'id' => $this->memo->id
                ]);
    }

}
