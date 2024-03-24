import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';


const actions = [
  { label: "Option 1", value: 1 },
  { label: "Another Option", value: 2 },
  { label: "A final option", value: 3 }
];

export const Dropdown = () => {
  return (
      <div >
        <div className="row">
          <div ></div>
          <div>
            <Select options={actions} />
          </div>
          <div></div>
        </div>
      </div>
  
  )
}
