import 'package:flutter/material.dart';

void main() {
  runApp(
    Column(
      children: [
        Text(
          'Olá, HelpUs!',
          textDirection: TextDirection.ltr,
        ),
        Text(
          'Google Flutter',
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
            child: Image.network(
                'https://i.picsum.photos/id/9/250/250.jpg?hmac=tqDH5wEWHDN76mBIWEPzg1in6egMl49qZeguSaH9_VI'),
          ),
        ),
        Text(
          'Google Flutter',
          textDirection: TextDirection.ltr,
          style: TextStyle(
            color: Colors.blue,
            fontSize: 20,
            fontWeight: FontWeight.bold,
            backgroundColor: Colors.yellow,
          ),
        ),
      ],
    ),
  );
}
