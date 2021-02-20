#include "eeprom.h"
#include <ESP8266WiFi.h>
#include "rgb.h"

void VerificaConexao()
{
    String login = eepromReadlogin();
    String senha = eepromReadsenha();
    Serial.println("\n\nEEPROM SSID: " + (String)login + "   EEPROM SENHA: " + (String)senha);

    //Imprime SSID e SENHA
    if (login.length() > 0)
    {
        piscarLedWifi(7);
        Serial.println("\nTentando conectar, aguarde...");
        WiFi.begin(login, senha);
    }

    if (WiFi.status() == WL_CONNECTED)
    {
        Serial.println("Conectado!");
    }
    else
    {
        Serial.print("\nFalha ao conectar, pressione o botão WPS no seu roteador ...");
    }
}