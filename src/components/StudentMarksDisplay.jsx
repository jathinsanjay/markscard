// StudentMarksDisplay.js
import React from 'react';

const StudentMarksDisplay = ({ student }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Scholar Information</h2>
        {student ? (
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span>{' '}
              <span className="text-green-700 font-semibold">{student.name}</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Registration Number:</span>{' '}
              {student.regNo}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Course Credits:</span> 3
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Course Code:</span> CS3027
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Course:</span> Deep Learning
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Marks:</span>{' '}
              <span className="text-red-700 font-semibold">{student.marks}</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Maximum Marks:</span> 100
            </p>
          </div>
        ) : (
          <p className="mt-4 text-red-600">
            No student found with the provided registration number.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentMarksDisplay;
