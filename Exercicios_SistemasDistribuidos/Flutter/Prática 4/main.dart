import 'dart:ui';

import 'package:flutter/material.dart';

void main() {
  runApp(
    Row(
      textDirection: TextDirection.ltr,
      children: [
        Expanded(
          child: FittedBox(
            fit: BoxFit.contain,
            child: Image(
              image: NetworkImage(
                'demo_ipod.gif',
              ),
            ),
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
        )
      ],
    ),
  );
}
