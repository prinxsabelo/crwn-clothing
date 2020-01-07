import React from 'react';
import './custom-buttons.styles.scss';
const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => (

    <button type={otherProps.type} className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button` }{...otherProps}>{children}</button>
)
export default CustomButton;
