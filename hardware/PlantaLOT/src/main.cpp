#include <Arduino.h>
#include "rgb.h"
#include "wps.h"

#define Botao D3                           // Botão flash do esp GPIO 0

int red = 5;                               //PINO DIGITAL EM QUE O TERMINAL 'R' ESTÁ CONECTADO
int green = 16;                            //PINO DIGITAL EM QUE O TERMINAL 'G' ESTÁ CONECTADO
int blue = 4;                              //PINO DIGITAL EM QUE O TERMINAL 'B' ESTÁ CONECTADO

#define Botao D3                           // Botão flash do esp GPIO 0

void setup(){

Serial.begin(9600);
pinMode(red, OUTPUT);
pinMode(green, OUTPUT);
pinMode(blue, OUTPUT);
digitalWrite(red, HIGH);
digitalWrite(green, HIGH);
digitalWrite(blue, HIGH);


}
 
void loop(){

if(digitalRead(Botao) == LOW){
  WPS();                                    // Chama função para conexão do WiFi via WPS            
  }

}
 