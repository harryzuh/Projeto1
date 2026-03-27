package com.vitaltech.mayayamamoto;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;

public class TrilhaExerciciosActivity extends AppCompatActivity {
    TextView txtOla;
    Intent intent;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_trilha_exercicios);

        txtOla = findViewById(R.id.txtOla);

        String nomeRecebido = getIntent().getStringExtra("nome");

        txtOla.setText("Olá, " + nomeRecebido);

    }
}
