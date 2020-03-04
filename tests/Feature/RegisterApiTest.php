<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;


class RegisterApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_新しいユーザを作成して返却する()
    {
        $data = [
            'name' => 'tech',
            'email' => 'test@test.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        $response = $this->json('POST', route('register'), $data);

        // $user = User::first();
        // $this->assertEquals($data['name'], $user->name);

        // $response->assertStatus(201)
        //          ->assertJson(['name' => $user->name]);

    }
}
