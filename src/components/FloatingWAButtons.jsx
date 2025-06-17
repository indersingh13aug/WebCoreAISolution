import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWAButtons = () => {
  return (
    <div className="fixed right-4 bottom-24 flex flex-col gap-4 z-50">

      {/* WhatsApp */}
      <div className="flex items-center justify-start relative group/whatsapp">
        <a
          href="https://wa.me/919625059337"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row-reverse items-center bg-green-600 text-white rounded-full w-fit pl-3 pr-3 py-2 shadow-lg"
        >
          <FaWhatsapp className="text-xl" />
          <span className="hidden sm:inline-block max-w-0 overflow-hidden transition-all duration-300 whitespace-nowrap group-hover/whatsapp:max-w-[100px] group-hover/whatsapp:ml-2">
            WhatsApp &nbsp;
          </span>
        </a>
      </div>

     

    </div>
  );
};

export default FloatingWAButtons;
