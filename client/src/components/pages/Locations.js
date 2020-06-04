import React from "react";
import Icons from "../assets";

function Locations(props) {
  return (
    <>
      <div onClick={props.togglePop}>
        <button className="inventory__button">
          <img
            className="inventory__button--addIcon"
            src={Icons.addIcon}
            alt="create new inventory button"
          />
        </button>
      </div>
      <h1>location page</h1>
    </>
  );
}

export default Locations;
