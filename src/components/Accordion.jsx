import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2 border-b border-[rgba(255,255,255,0.24)]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between w-full cursor-pointer text-[rgba(255,255,255,0.92)] text-[.8rem]"
      >
        <span>{title}</span>
        {isOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out
          ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden px-4 text-[rgba(255,255,255,0.8)]">
          {content}
        </div>
      </div>
    </div>
  );
}
