import React from 'react';
import './custom-buttons.styles.scss';
const CustomButton = ({children, ...otherProps}) => (
  
    <button type={otherProps.type} className='custom-button' {...otherProps}>{children}</button>
)
export default CustomButton;