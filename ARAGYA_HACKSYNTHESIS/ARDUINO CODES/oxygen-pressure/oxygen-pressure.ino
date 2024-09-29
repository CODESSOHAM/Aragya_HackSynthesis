#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Set the LCD address to 0x27 for a 16 chars and 2 line display
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Define the pin where the potentiometer is connected
const int potPin = A0;

void setup() {
  // Initialize the LCD
  lcd.init();
  lcd.backlight();

  // Start the serial communication
  Serial.begin(9600);

  // Print an initial message to the LCD
  lcd.print("Oxygen pressure: ");
}

void loop() {
  // Read the value from the potentiometer
  int potValue = analogRead(potPin);

  // Print the value to the Serial Monitor
  Serial.print("Oxygen Pressure: ");
  Serial.print(potValue/10);
  Serial.println(" mmhg");

  // Display the potentiometer value on the LCD
  lcd.setCursor(0, 1); // Move cursor to the beginning of the second line
  
  lcd.print(potValue/10);
  lcd.println(" mmhg                          ");


  // Wait for a bit before reading again
  delay(100);
}
