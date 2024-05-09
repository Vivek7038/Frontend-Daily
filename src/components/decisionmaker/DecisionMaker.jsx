import React, { useState } from "react";

const Decisionmaker = () => {
  // State to manage the list of decision options
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to handle adding a new option
  const handleAddOption = () => {
    if (inputValue.trim() !== "") {
      setOptions([...options, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">
            Decision Maker
          </h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddOption();
          }}
          className="w-full max-w-sm mx-auto px-4 py-2"
        >
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add a Decision"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-black-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-blue py-1 px-2 rounded hover:text-white"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
        <ul className="divide-y divide-gray-200 px-4">
        {options.slice(0).reverse().map((option, index) => ( // Reverse the options array before mapping
            <li key={index} className="py-4">
              <div className="flex items-center">
                <div className="ml-3 block text-gray-900">
                  <span className="text-lg font-medium">{option}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Decisionmaker;
