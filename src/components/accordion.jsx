import { useState, useRef, useEffect } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const contentHeight = contentRef.current.scrollHeight;
    if (isOpen) {
      contentRef.current.style.height = `${contentHeight}px`;
    } else {
      contentRef.current.style.height = "0";
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded bg-white">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-bold text-md">{title}</h3>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#8250;
        </span>
      </div>
      <div
        className={`overflow-hidden transition-height duration-300 ${
          isOpen ? "" : "h-0"
        }`}
        ref={contentRef}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
