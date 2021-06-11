import 'package:flutter/material.dart';

void main() {
  String nome = "Ana";
  String dia = "quinta-feira";
  runApp(
    Center(
      child: RichText(
        textDirection: TextDirection.ltr,
        textAlign: TextAlign.center,
        text: TextSpan(
          text: "Olá, ",
          style: TextStyle(
            color: Colors.green,
            fontSize: 30,
            fontWeight: FontWeight.bold,
            backgroundColor: Colors.white,
          ), //TextStyle.
          children: <TextSpan>[
            TextSpan(
              text: '$nome',
              style: TextStyle(
                color: Colors.blue,
                decorationStyle: TextDecorationStyle.double,
                backgroundColor: Colors.green,
              ),
            ),
            TextSpan(
              text: '!',
              style: TextStyle(
                color: Colors.green,
              ),
            ),
            TextSpan(
              text: '\nHoje é $dia!',
              style: TextStyle(
                color: Colors.red,
                backgroundColor: Colors.yellow,
              ),
            ),
            TextSpan(
              text: '\nBom dia!',
            ),
            TextSpan(
              text:
                  '\n\nHoje, você terá que escrever um aplicativo em Flutter. O aplicativo deve imprimir um texto na tela. O texto possui trechos com estilos diferentes.',
              style: TextStyle(
                color: Colors.white,
                backgroundColor: Colors.black,
              ),
            ),
            TextSpan(
              text: '\n\n\n\n\n\n\nBoa prática!',
              style: TextStyle(
                color: Colors.purple,
                backgroundColor: Colors.black,
              ),
            ),
            TextSpan(
              text: '\n=',
              style: TextStyle(
                backgroundColor: Colors.black,
              ),
            ),
            TextSpan(
              text: 'D',
              style: TextStyle(
                color: Colors.red,
                backgroundColor: Colors.black,
              ),
            ),
            TextSpan(
              text: 'H',
              style: TextStyle(
                color: Colors.white,
                backgroundColor: Colors.black,
              ),
            ),
          ],
        ),
      ),
    ),
  );
}
