import 'package:flutter/material.dart';

void main() {
  runApp(    
              child: Expanded(
                child: FittedBox(
                  fit: BoxFit.contain,
                  alignment: Alignment.center,
                  child: Image(
                    image: NetworkImage(
                      'https://i.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.webp',
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    ),
  );
}