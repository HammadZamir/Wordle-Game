import React from "react";

function Keyboard({ handleKeyPress, letterStatus }) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
  ];

  const getKeyColor = (key) => {
    switch (letterStatus[key]) {
      case "correct":
        return "bg-green-500 text-white";
      case "present":
        return "bg-yellow-500 text-white";
      case "absent":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-1 justify-center">
          {row.map((key) => (
            <button
              key={key}
              className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded ${getKeyColor(
                key
              )}`}
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;