import React from 'react';
import { FaPhone } from 'react-icons/fa';

const FloatingCallButtons = () => {
  return (
    <div className="fixed right-4 bottom-24 flex flex-col gap-4 z-50">

      {/* Call */}
      <div className="flex items-center justify-end relative group/call">
        <a
          href="tel:+919625059337"
          className="flex flex-row-reverse items-center bg-blue-600 text-white rounded-full w-fit pl-3 pr-3 py-2 shadow-lg"
        >
          <FaPhone className="text-xl" />
          <span className="hidden sm:inline-block max-w-0 overflow-hidden transition-all duration-300 whitespace-nowrap group-hover/call:max-w-[80px] group-hover/call:ml-2">
            Call Us &nbsp;
          </span>
        </a>
      </div>

    </div>
  );
};

export default FloatingCallButtons;
