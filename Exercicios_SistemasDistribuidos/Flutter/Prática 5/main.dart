import 'package:flutter/material.dart';

void main() {
  runApp(
    Column(
      textDirection: TextDirection.rtl,
      children: [
        Text(
          'Teste',
          textDirection: TextDirection.ltr,
        ),
        Expanded(
          child: FittedBox(
            fit: BoxFit.contain,
            child: const FlutterLogo(),
          ),
        ),
        Expanded(
          child: FittedBox(
            fit: BoxFit.contain,
            child: Image(
              image: NetworkImage(
                'https://picsum.photos/250?image=9',
              ),
            ),
          ),
        ),
        Text(
          'Google Flutter.',
          textDirection: TextDirection.ltr,
          style: TextStyle(
            color: Colors.blue,
            fontSize: 20,
            fontWeight: FontWeight.bold,
            backgroundColor: Colors.white,
          ),
        ),
      ],
    ),
  );
}