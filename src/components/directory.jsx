import React, { useState } from 'react'
import "../App.css";
export default function Directory({ folder }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {isOpen ? '📂' : '📁'} {folder.name}
      </div>
      {isOpen && folder.children && (
        <div style={{ paddingLeft: 20 }}>
          {folder.children.map((child) => (
            <Directory key={child.name} folder={child} />
          ))}   
        </div>
      )}
    </div>
  );

}
