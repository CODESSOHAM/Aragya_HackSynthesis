import React from 'react';

const Parameters = () => {
  const parameters = [
    { name: 'OXYGEN SATURATION (SPO2)', exactRate: '95%-100%', abnormalRate: '' },
    { name: 'BLOOD PRESSURE', exactRate: '120/80', abnormalRate: '' },
    { name: 'PULSE', exactRate: '70-100 BPM', abnormalRate: '' },
    { name: 'BODY TEMPERATURE', exactRate: '98.6F', abnormalRate: '' },
    { name: 'BLOOD GLUCOSE LEVEL', exactRate: '100-125mg/dl', abnormalRate: '' },
    { name: 'HAEMOGLOBIN (MALE)', exactRate: '14-18gm/dl', abnormalRate: '' },
    { name: 'HAEMOGLOBIN (FEMALE)', exactRate: '12-16gm/dl', abnormalRate: '' },
    { name: 'BMI', exactRate: '18.5-24.9', abnormalRate: '<18.5 (UNDERWEIGHT), 25-29 (OVERWEIGHT), >30 (OBESITY)' }
  ];

  return (
    <div className="bg-gradient-to-r from-custom-black via-custom-dark-purple to-custom-purple text-white py-4 px-6 min-h-screen">
      <h2 className="text-center text-xl mb-4 mt-20">Some General Parameters Useful in Day-to-Day Life</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">PARAMETERS</th>
              <th className="border border-gray-300 px-4 py-2">HEALTHY VALUE</th>
              <th className="border border-gray-300 px-4 py-2">ABNORMAL RATE</th>
            </tr>
          </thead>
          <tbody>
            {parameters.map((param, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{param.name}</td>
                <td className="border border-gray-300 px-4 py-2">{param.exactRate}</td>
                <td className="border border-gray-300 px-4 py-2">{param.abnormalRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Parameters;
