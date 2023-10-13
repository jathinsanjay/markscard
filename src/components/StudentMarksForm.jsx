// StudentMarksForm.js
import React, { useState } from 'react';

const StudentMarksForm = ({ onSearch }) => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(regNo, password);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 max-w-lg">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Registration Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-1/3 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default StudentMarksForm;
