<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class LoginApiTest extends TestCase
{

    use RefreshDatabase;
    
    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = factory(User::class)->create();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_新規作成したユーザでログイン認証しユーザ情報をする返却する()
    {

        $data = [
            'email' => $this->user->email,
            'password' => 'password',
        ];

        $response = $this->json('POST', route('login'), $data);

        $response->assertStatus(200)
                ->assertJson(['nickname' => $this->user->nickname]);

        $this->assertAuthenticatedAs($this->user);
    }
}
