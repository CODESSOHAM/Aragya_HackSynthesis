import React from 'react';

// Importing images
import ecgElectrodes from '../Components/images/ecg-electrodes.png';
import ad8232Sensor from '../Components/images/ad8232-sensor.png';
import max30102Sensor from '../Components/images/max30102-sensor.png';
import ambuBag from '../Components/images/ambu2.png';
import ultrasonicSensor from '../Components/images/ultrasonic.png';
import displayScreen from '../Components/images/display-screen.png';
import arduinoUno from '../Components/images/arduino_uno.png';
import arduinoNano from '../Components/images/arduino_nano.png';
import hc05 from '../Components/images/hc05.png';
import l298MotorDriver from '../Components/images/l298.png';
import dfPlayerMini from '../Components/images/dfp.png';
import oledDisplay from '../Components/images/oled2.png';

const ComponentsUsed: React.FC = () => {
  return (
    <div className="bg-custom-black text-white min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center mb-8 mt-12">
        QUADRA VITAL CARE SYNC SYSTEM - COMPONENTS AND FEATURES
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ECG Electrodes Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={ecgElectrodes} alt="ECG Electrodes" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">ECG Electrodes</h3>
          <p className="mt-2">
            ECG electrodes are used to detect electrical activity of the heart. They are placed on the skin at specific locations to capture the electrical signals generated during each heartbeat.
          </p>
        </div>
        
        {/* AD8232 Sensor Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={ad8232Sensor} alt="AD8232 Sensor" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">ECG Mechanism (AD8232 Sensor)</h3>
          <p className="mt-2">
            The AD8232 sensor is used to measure the electrical activity of the heart. It amplifies and filters the signals from the ECG electrodes, producing a clear and accurate ECG waveform.
          </p>
        </div>
        
        {/* MAX30102 Sensor Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={max30102Sensor} alt="MAX30102 Sensor" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">Oximeter (MAX30102 Sensor)</h3>
          <p className="mt-2">
            The MAX30102 sensor is used to measure blood oxygen levels and pulse rate. It works on the principle of photoplethysmography, emitting light into the skin and measuring light absorption.
          </p>
        </div>

        {/* Ambu Bag Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={ambuBag} alt="Ambu Bag" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">Ambu Bag with Stepper Motor</h3>
          <p className="mt-2">
            The Ambu bag, connected to a stepper motor and hinge/shaft mechanism, provides artificial ventilation to patients, ensuring controlled airflow.
          </p>
        </div>
        
        {/* Ultrasonic Sensor Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={ultrasonicSensor} alt="Ultrasonic Sensor" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">Saline Level Monitoring (Ultrasonic Sensor)</h3>
          <p className="mt-2">
            The ultrasonic sensor monitors the saline level in the drip bag by measuring the time taken for ultrasonic waves to reflect back from the saline surface.
          </p>
        </div>
        
        {/* Display Screen Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={displayScreen} alt="Display Screen" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">Viewing Display Screens</h3>
          <p className="mt-2">
            The display screens show real-time data from the ECG and oximeter sensors, displaying heart activity and oxygen levels for continuous monitoring.
          </p>
        </div>

        {/* Arduino Uno Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={arduinoUno} alt="Arduino Uno" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">Arduino Uno</h3>
          <p className="mt-2">
            Arduino Uno is a microcontroller used to collect and process data from various sensors, controlling displays, and managing communication between modules.
          </p>
        </div>

        {/* Arduino Nano Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={arduinoNano} alt="Arduino Nano" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">Arduino Nano</h3>
          <p className="mt-2">
            Arduino Nano is a compact microcontroller ideal for precise control and data acquisition from various sensors due to its small size and flexibility.
          </p>
        </div>
        
        {/* HC-05 Bluetooth Module Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={hc05} alt="Bluetooth Module (HC-05)" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">Bluetooth Module (HC-05)</h3>
          <p className="mt-2">
            The HC-05 Bluetooth module enables wireless communication, allowing the project to send and receive data from other Bluetooth-enabled devices.
          </p>
        </div>

        {/* L298 Motor Driver Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={l298MotorDriver} alt="L298 Motor Driver" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">L298 Motor Driver</h3>
          <p className="mt-2">
            The L298 motor driver controls the speed and direction of DC motors, essential for projects involving motorized components.
          </p>
        </div>

        {/* DFPlayer Mini Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={dfPlayerMini} alt="DFPlayer Mini" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">DFPlayer Mini</h3>
          <p className="mt-2">
            The DFPlayer Mini is a small MP3 player module used for audio playback, such as voice prompts, alerts, or background music.
          </p>
        </div>

        {/* OLED Display Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img src={oledDisplay} alt="OLED Display" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mt-4">OLED Display</h3>
          <p className="mt-2">
            The OLED display shows information with high contrast and clarity, ideal for displaying text, graphics, and real-time data from sensors.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ComponentsUsed;
