import React from "react";

function SelectInput(props) {
  return (
    <div>
      <select name="location" className="createNew__location">
        <option defaultValue className="createNew__location--option">
          Select
        </option>
        {props.inventoryList.map((inventory, index) => (
          <option
            value={index}
            className="createNew__location--option"
          >{`${inventory.city} ${inventory.country}`}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
