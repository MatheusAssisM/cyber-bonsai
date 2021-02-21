#include <Arduino.h>

float FazLeituraUmidade()
{
    int ValorADC;
    float UmidadePercentual;

    ValorADC = analogRead(0); //1024 -> 3,3V
    UmidadePercentual = 100 * ((1024 - (float)ValorADC) / 674);

    if (ValorADC <= 230)
    {
        UmidadePercentual = 100.0;
    }

    return UmidadePercentual;
}
