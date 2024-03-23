import React, { useState } from 'react';

function Dropdown() {
    const[isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
     return (
      <div className="dropdown" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', height: '200vh' }}>
        <button onClick={toggleDropdown}>Open Dropdown</button>
        {isOpen && (
          <div className="dropdown-content">
            <a href="#">Hello</a>
            <a href="#">Hi</a>
            <a href="#">Touch Grass</a>
          </div>
        )}
        </div>
      );
    }

    export default Dropdown; 