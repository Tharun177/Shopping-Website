import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ExpandableDropdown = ({ name, subcategories, onClick, onHover }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div onClick={handleToggle}>{name}</div>
      <AnimatePresence>
        {isExpanded && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {subcategories.map((subcategory) => (
              <ExpandableDropdown
                key={subcategory.id}
                name={subcategory.name}
                subcategories={subcategory.subcategories}
                onClick={onClick}
                onHover={onHover}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableDropdown;
