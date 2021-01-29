import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color=>(
            <ColorBox background={color.color} name={color.name}/>
        ))
        return (
            <div className="Palette">
                {/* Navbar goes here */}
               <div className="Palette-colors">
                {/* Lot of color boxes */}
                {colorBoxes}
               </div>
               {/* Footer content */}
            </div>
        )
    }
}
export default Palette;