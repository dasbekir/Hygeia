//  Variabler
int Pulssensor = 1;        //  Pulssensor som är kopplad till analaog pin 0
int Lednmr13 = 13;   //  Arduinos inbyggda led

int Varde;                // Innehåller värdet. Värdet kan vara 0 till 1024
int Grans = 550;            // Avgör värdet som räknas som hjärtslag, och vilket den ska ignorera Determine which Varde to "count as a beat", and which to ingore.

// LED funktionen:
void funktion() {
  pinMode(lednmr13,OUTPUT);         // Led som blinkar enligt dina hjärtslag
   Serial.begin(9600);         // Hastighet av seriell uppdatering

}

// Main loop funktion
void loop() {

  Varde = analogRead(Pulssensor);  // Läser pulssensorns värde
                                              // Anger denna värde till Varde variabeln

   Serial.println(Varde);                    //  Skickar värdet till seriella plottern


   if(Varde > Grans){                          // Om värdet är över 550 slår Arduinon på inbyggda LEDen
     digitalWrite(lednmr13,HIGH);
   } else {
     digitalWrite(lednmr13,LOW);                //  Om värdet är under 550 stängs LED av
   }


delay(10);


}