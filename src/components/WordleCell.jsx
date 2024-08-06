import React from "react";

function WordleCell({ letter, status }) {
  let bgColor;
  switch (status) {
    case "correct":
      bgColor = "bg-green-500 text-white";
      break;
    case "present":
      bgColor = "bg-yellow-500 text-white";
      break;
    case "absent":
      bgColor = "bg-gray-500 text-white";
      break;
    default:
      bgColor = "bg-white border-gray-400";
  }

  return (
    <div
      className={`w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold ${bgColor}`}
    >
      {letter}
    </div>
  );
}

export default WordleCell;