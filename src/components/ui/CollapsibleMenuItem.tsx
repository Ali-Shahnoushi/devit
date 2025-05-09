import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
// Optional icon (or use any SVG)

export default function CollapsibleMenuItem({
  title = "Menu",
  children,
  icon,
}: {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight!);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className="menu w-full p-0">
      <div
        className="flex items-center flex-col justify-between cursor-pointer px-4 py-2 rounded hover:bg-base-300 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between w-full">
          <span className="flex items-center gap-2">
            {icon} {title}
          </span>
          <IoIosArrowForward
            className={`w-4 h-4 transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </div>
        <div
          ref={contentRef}
          style={{ height }}
          className={`overflow-hidden w-full block transition-all duration-300 ease-in-out`}
        >
          <ul className="p-2 space-y-1">{children}</ul>
        </div>
      </div>
    </li>
  );
}
