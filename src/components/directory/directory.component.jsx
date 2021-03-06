import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from "./sections.data.js";

class Directory extends React.Component{
    constructor(props){
        
        super(props);
        this.state =  {
            sections: SECTIONS_DATA
        }
    }
    render(){
        return (
            <div  className="directory-menu">
                {this.state.sections.map(( {id, ...sectionProps}) => {
                  return  <MenuItem  key={id} {...sectionProps} />
                })}
            </div>
        )
    }
}
export default Directory;