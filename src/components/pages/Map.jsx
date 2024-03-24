import "../../App.css";
import React from "react";
import { MyMap } from "../MyMap";
import { Dropdown } from "../Dropdown";

export const Map = () => {
    return(
        <div>
            <div className="container">
            Green Spaces on Campus
            </div>
            <Dropdown/>
            <MyMap/>
        </div>
    )
};