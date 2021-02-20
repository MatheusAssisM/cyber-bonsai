#include <Arduino.h>
#include "rgb.h"
#include <ESP8266WiFi.h>                   // Biblioteca de WiFi 

void piscaled(){
    setColor("blue");
    delay(1000);
    setColor("off");
    delay(1000);
}

bool WPS() {
Serial.println("WPS config começou");
WiFi.mode(WIFI_STA);
delay(1000);
WiFi.begin("foobar",""); 

while (WiFi.status() == WL_DISCONNECTED) {
piscaled();
Serial.print(WiFi.status());
}
}
