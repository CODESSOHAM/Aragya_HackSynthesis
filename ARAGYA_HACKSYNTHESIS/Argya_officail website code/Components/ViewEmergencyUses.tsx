import React from 'react';
import inhalerImage from './images/inhaler.jpeg';
import nebulizerImage from './images/nebu2.jpg';
import cprImage from './images/cpr.png';
import firstAidImage from './images/firstaid.jpg';
import bpmImage from './images/bpm.jpg';
import oximeterImage from './images/oximeter.jpg';
import thermometerImage from './images/ther.jpg';

const ViewEmergencyUses: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gradient-to-r from-custom-black via-custom-dark-purple to-custom-purple min-h-screen">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 text-left mt-20">
        <img src={inhalerImage} alt="Inhaler" className="w-full h-40 object-cover" />
        <div className="bg-blue-600 text-white p-3 text-xl font-semibold text-center">Inhaler</div>
        <div className="p-4 text-base">
          <ul className="list-disc list-inside">
            <li>Shake the inhaler well before use.</li>
            <li>Attach the inhaler to the spacer if you have one.</li>
            <li>Exhale completely before placing the mouthpiece in your mouth.</li>
            <li>Press down on the inhaler while breathing in slowly.</li>
            <li>Hold your breath for about 10 seconds to allow the medication to settle in your lungs.</li>
            <li>Exhale slowly and repeat if necessary.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 text-left mt-20">
        <img src={nebulizerImage} alt="Nebulizer" className="w-full h-40 object-cover" />
        <div className="bg-blue-600 text-white p-3 text-xl font-semibold text-center">Nebulizer</div>
        <div className="p-4 text-base">
          <ul className="list-disc list-inside">
            <li>Place the medication into the nebulizer cup.</li>
            <li>Attach the mask or mouthpiece to the nebulizer.</li>
            <li>Sit upright and place the mask over your nose and mouth or put the mouthpiece in your mouth.</li>
            <li>Turn on the nebulizer and breathe in the mist slowly and deeply.</li>
            <li>Continue until the medication is completely used.</li>
            <li>Rinse your mouth and the mask or mouthpiece after each use.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 text-left mt-20">
        <img src={cprImage} alt="CPR" className="w-full h-40 object-cover" />
        <div className="bg-blue-600 text-white p-3 text-xl font-semibold text-center">CPR</div>
        <div className="p-4 text-base">
          <ul className="list-disc list-inside">
            <li>Check the person's responsiveness and breathing.</li>
            <li>Call emergency services if unresponsive.</li>
            <li>Place the heel of one hand on the center of the chest, place the other hand on top, and interlock your fingers.</li>
            <li>Push hard and fast, aiming for 100-120 compressions per minute.</li>
            <li>After 30 compressions, give 2 rescue breaths if trained.</li>
            <li>Continue until emergency help arrives or the person starts breathing.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 text-left mt-20">
        <img src={firstAidImage} alt="First Aid" className="w-full h-40 object-cover" />
        <div className="bg-blue-600 text-white p-3 text-xl font-semibold text-center">First Aid</div>
        <div className="p-4 text-base">
          <ul className="list-disc list-inside">
            <li>Assess the situation and ensure the area is safe.</li>
            <li>Check for responsiveness and breathing.</li>
            <li>Call emergency services if needed.</li>
            <li>If bleeding, apply direct pressure to the wound using a clean cloth.</li>
            <li>If a fracture is suspected, immobilize the area.</li>
            <li>Provide care until professional help arrives.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 text-left mt-20">
        <img src={bpmImage} alt="Blood Pressure Machine" className="w-full h-40 object-cover" />
        <div className="bg-blue-600 text-white p-3 text-xl font-semibold text-center">Blood Pressure Machine</div>
        <div className="p-4 text-base">
          <ul className="list-disc list-inside">
            <li>Sit comfortably with your back supported and feet flat on the floor.</li>
            <li>Place the cuff on your upper arm, level with your heart.</li>
            <li>Press the start button on the machine.</li>
            <li>Remain still and quiet as the cuff inflates and measures your blood pressure.</li>
            <li>Wait for the reading to appear on the display.</li>
            <li>Record the reading and follow any instructions given by your healthcare provider.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 text-left mt-20">
        <img src={oximeterImage} alt="Oximeter" className="w-full h-40 object-cover" />
        <div className="bg-blue-600 text-white p-3 text-xl font-semibold text-center">Oximeter</div>
        <div className="p-4 text-base">
          <ul className="list-disc list-inside">
            <li>Ensure the oximeter is turned on.</li>
            <li>Place the device on your fingertip.</li>
            <li>Keep your hand still as the device measures your oxygen levels.</li>
            <li>Wait for the reading to stabilize.</li>
            <li>Note the oxygen saturation percentage displayed.</li>
            <li>If the reading is below 90%, seek medical advice.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 text-left mt-20">
        <img src={thermometerImage} alt="Digital Thermometer" className="w-full h-40 object-cover" />
        <div className="bg-blue-600 text-white p-3 text-xl font-semibold text-center">Digital Thermometer</div>
        <div className="p-4 text-base">
          <ul className="list-disc list-inside">
            <li>Turn on the thermometer and wait for it to be ready.</li>
            <li>Place the thermometer under the tongue or in the armpit.</li>
            <li>Close your mouth and keep it in place until the reading is complete.</li>
            <li>Wait for the beep and note the temperature displayed.</li>
            <li>Clean the thermometer after each use.</li>
            <li>If the temperature is above 100.4°F (38°C), consult a healthcare provider.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewEmergencyUses;
