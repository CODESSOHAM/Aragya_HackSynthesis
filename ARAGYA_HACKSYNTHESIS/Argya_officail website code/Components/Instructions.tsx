import React from 'react';
import elecImage from './images/elec.jpg';

const Instructions: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-custom-black via-custom-dark-purple to-custom-purple text-white p-6 mt-8">
      <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white mt-12">
        Portable ECG Machine Instruction Manual
      </h2>

      <h3 className="text-2xl font-semibold mt-8">Components:</h3>
      <p className="text-lg leading-relaxed mt-4">
        1. ECG Electrodes<br />
        2. ECG Mechanism (AD8232 Sensor)<br />
        3. Oximeter (MAX30102 Sensor)<br />
        4. Ambu Bag with Stepper Motor and Hinge/Shaft Mechanism<br />
        5. Saline Level Monitoring System (Ultrasonic Sensor)<br />
        6. Display Screens (ECG graph and oxygen level/pulse)<br />
      </p>

      <h3 className="text-2xl font-semibold mt-8">Instructions for Use:</h3>
      <p className="text-lg leading-relaxed mt-4">
        <b>1. Setting Up the ECG Electrodes:</b><br />
        - Placement: Place the ECG electrodes on the patient’s skin. Recommended positions are on the chest around the heart area.<br />
        <img src={elecImage} alt="ECG Electrodes Placement" className="my-4 mx-auto" />

        - Connection: Connect the electrodes to the AD8232 sensor using the provided cables. Ensure the connections are secure to avoid signal loss.<br />
        <b>2. Using the ECG Mechanism (AD8232 Sensor):</b><br />
        - Initialization: Power on the AD8232 sensor and ensure it is properly connected to the display screen.<br />
        - Monitoring: The ECG graph will be displayed on the designated screen. Monitor the graph for real-time cardiac activity. Ensure the patient remains still to get accurate readings.<br />
        <b>3. Using the Oximeter (MAX30102 Sensor):</b><br />
        - Placement: Ask the patient to press their thumb on the oximeter sensor.<br />
        - Initialization: Power on the MAX30102 sensor and ensure it is connected to the display screen.<br />
        - Monitoring: The screen will display the patient’s oxygen level and pulse rate. Ensure the thumb remains steady during measurement for accurate readings.<br />
        <b>4. Operating the Ambu Bag with Stepper Motor and Hinge/Shaft Mechanism:</b><br />
        - Setup: Ensure the ambu bag is connected to the hinge and shaft mechanism controlled by the stepper motor.<br />
        - Operation: Power on the stepper motor. The motor will automatically compress and release the ambu bag, providing ventilation to the patient.<br />
        - Adjustment: Adjust the motor speed and compression rate according to the patient’s ventilation needs.<br />
        <b>5. Saline Level Monitoring System (Ultrasonic Sensor):</b><br />
        - Setup: Place the ultrasonic sensor to monitor the saline level in the drip bag.<br />
        - Initialization: Power on the ultrasonic sensor.<br />
        - Monitoring: The sensor will continuously measure the saline level and provide real-time data. Ensure the saline bag is properly positioned for accurate measurements.<br />
        <b>6. Viewing Display Screens:</b><br />
        - ECG Graph: Monitor the ECG graph for heart activity. Look for any irregular patterns that may indicate an issue.<br />
        - Oxygen Level and Pulse: Monitor the patient’s oxygen level and pulse rate. Ensure the levels are within the normal range.<br />
      </p>

      <h3 className="text-2xl font-semibold mt-8">Maintenance and Troubleshooting:</h3>
      <p className="text-lg leading-relaxed mt-4">
        - Regular Checks: Regularly check all connections and sensors to ensure they are functioning correctly.<br />
        - Cleaning: Clean the electrodes and sensors after each use to maintain hygiene and sensor accuracy.<br />
        - Troubleshooting: If any sensor fails to display data, check the power supply and connections. Refer to the sensor’s manual for specific troubleshooting steps.<br />
      </p>

      <h3 className="text-2xl font-semibold mt-8">Safety Precautions:</h3>
      <p className="text-lg leading-relaxed mt-4">
        - Patient Safety: Ensure all components are securely connected to avoid accidental disconnections during monitoring.<br />
        - Electrical Safety: Ensure the machine is properly insulated to prevent electrical hazards.<br />
        - Emergency Protocol: Have an emergency protocol in place in case of any abnormal readings or equipment failure.<br />
      </p>
    </div>
  );
};

export default Instructions;
