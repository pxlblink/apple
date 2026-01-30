import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2 border-b border-[rgba(0,0,0,0.16)]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between w-full cursor-pointer text-[.8rem]"
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
        <div className="overflow-hidden px-4">{content}</div>
      </div>
    </div>
  );
}
