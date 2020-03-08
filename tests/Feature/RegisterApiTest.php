<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;


class RegisterApiTest extends TestCase
{
    use RefreshDatabase;
    
    /**
     * A basic feature test example.
     */
    public function test_新しいユーザを作成して返却する()
    {
        $data = [
            'given_name' =>  'テスト',
            'last_name' => '太郎',
            'nickname' => 'テス太',
            'email' => 'test@test.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        $response = $this->json('POST', route('register'), $data);

        $user = User::first();
        $this->assertEquals($data['nickname'], $user->nickname);

        $response
            ->assertStatus(201)
            ->assertJson(['given_name' => $user->given_name])
            ->assertJson(['nickname' => $user->nickname]);

    }
}
