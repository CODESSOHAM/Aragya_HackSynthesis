#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
#define SCREEN_ADDRESS 0x3C  // Common I2C address for SSD1306 is 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// Variables for pulse and SpO2 simulation
int currentPulse = 80;
int targetPulse = 80;
int currentSpO2 = 97;
int targetSpO2 = 97;
int graphX = 0;  // Horizontal position for the graph
unsigned long startMillis; // Store the time when power starts
bool transitionStarted = false;
bool showPulseAndSpO2 = false; // Track when to show the pulse and SpO2
unsigned long transitionMillis = 0; // Track time during the transition
unsigned long lastRandomChangeMillis = 0;

void setup() {
  Serial.begin(115200);

  // Initialize the OLED display
  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;);
  }

  display.clearDisplay();
  display.display();
  
  // Initialize random seed
  randomSeed(analogRead(0));

  // Record the start time
  startMillis = millis();
}

void loop() {
  unsigned long currentMillis = millis();

  // Clear the display before updating it
  display.clearDisplay();

  if (currentMillis - startMillis <= 10000) {
    // Show "Place your finger" message for the first 10 seconds
    displayPlaceFinger();
  } else {
    if (!transitionStarted) {
      transitionStarted = true;
      transitionMillis = millis(); // Record the time when transition starts
    }
    // Gradually transition from "Place your finger" to pulse and SpO2
    gradualTransition(currentMillis);
  }

  // Show the heartbeat graph after transition is complete
  if (showPulseAndSpO2) {
    if (currentMillis - lastRandomChangeMillis >= 3000) {
      // Every 3 seconds, choose a new target pulse and SpO2
      targetPulse = random(67, 96);
      targetSpO2 = random(94, 100);
      lastRandomChangeMillis = currentMillis;
    }
    updatePulseAndSpO2();  // Slowly move towards target values
    displayPulseAndSpO2();
    drawHeartbeatGraph();
  }

  // Display everything on the OLED screen
  display.display();
  
  delay(100);
}

void displayPlaceFinger() {
  display.setTextSize(2);  // Larger text for clarity
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 20);
  display.print("Place your");
  display.setCursor(0, 40);
  display.print("finger");
}

void gradualTransition(unsigned long currentMillis) {
  // Calculate how long the transition has been running
  unsigned long transitionElapsed = currentMillis - transitionMillis;

  // Transition time is 2 seconds (2000 ms)
  if (transitionElapsed <= 2000) {
    // Fade out the "Place your finger" message gradually
    int brightness = map(transitionElapsed, 0, 2000, 255, 0);  // Gradually reduce brightness
    display.setTextSize(2);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(0, 20);
    display.print("Place your");
    display.setCursor(0, 40);
    display.print("finger");
  } else {
    // Transition completed, start showing Pulse and SpO2
    showPulseAndSpO2 = true;
  }
}

void updatePulseAndSpO2() {
  // Gradually move currentPulse toward targetPulse
  if (currentPulse < targetPulse) {
    currentPulse++;  // Increase slowly
  } else if (currentPulse > targetPulse) {
    currentPulse--;  // Decrease slowly
  }

  // Gradually move currentSpO2 toward targetSpO2
  if (currentSpO2 < targetSpO2) {
    currentSpO2++;  // Increase slowly
  } else if (currentSpO2 > targetSpO2) {
    currentSpO2--;  // Decrease slowly
  }
}

void displayPulseAndSpO2() {
  // Display pulse value
  display.setTextSize(2);  // Increase font size
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.print("Pulse:");
  display.setCursor(80, 0);  // Adjust position to avoid overlap
  display.print(currentPulse);

  // Display SpO2 level
  display.setCursor(0, 20);  // Adjust the vertical position
  display.print("SpO2:");
  display.setCursor(80, 20);  // Adjust position to fit the SpO2 value
  display.print(currentSpO2);
  display.print("%");

  // Draw the heart symbol
  display.fillCircle(20, 50, 8, SSD1306_WHITE);  // Smaller heart symbol
  display.fillCircle(35, 50, 8, SSD1306_WHITE);
  display.fillTriangle(10, 50, 45, 50, 27, 62, SSD1306_WHITE);  // Bottom triangle
}

void drawHeartbeatGraph() {
  // Simulate a waveform based on pulse value
  int graphY = 45; // Base height for the graph
  int amplitude = currentPulse - 67;  // Use pulse value to vary amplitude
  
  // Draw a simple waveform with vertical lines
  for (int i = 0; i < 5; i++) {
    int lineHeight = (i % 2 == 0) ? graphY - amplitude : graphY + amplitude / 2;
    display.drawLine(graphX + i, graphY, graphX + i, lineHeight, SSD1306_WHITE);
  }

  // Update the graphX position for a scrolling effect
  graphX += 5;
  if (graphX > SCREEN_WIDTH) {
    graphX = 0;  // Reset to left side when it reaches the screen edge
  }
}
2
