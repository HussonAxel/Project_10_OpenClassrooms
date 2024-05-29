import {useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CollapseProps } from "./Collapse.type";

const Collapse: React.FC<CollapseProps> = ({ children, menuName, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`Collapse ${className}`}>
      <button onClick={handleCollapse} className="buttonCollapse">
        <span className="buttonText">{menuName}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={isOpen ? "faChevronDown rotate" : "faChevronDown"}
        />
      </button>
      {isOpen && <div className="CollapseContent">{children}</div>}
    </div>
  );
};

export default Collapse