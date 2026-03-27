package com.vitaltech.mayayamamoto;

public class LoginRequest {
    String email;
    String senha;

    public LoginRequest(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }
}
