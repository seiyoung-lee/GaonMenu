import React from "react";
import "./styles.scss";
import CustomContainer from "../partials/CustomContainer";

const ContactBar = ( props ) => {
  return (
    <div className="contact-bar">
      <CustomContainer verticalPadding={false}>
        <div className="contact-bar-out">
          <div className="contact-bar-cell" style={{width:"50%", color:"#bbbfc9"}}>
            <a>Bienvenidos a Restaurante Gaon</a>
          </div>
          <div className="contact-bar-content">
            <div className="contact-bar-cell">
              <a style={{color: "gray" }}> Horario de Atención: </a>
              <a style={{color: "black" }}> Lunes a Sabado -> 8am a 9pm </a>
            </div>
            <div className="contact-bar-cell">
            <a style={{color: "gray" }}> Contacto: </a>
              <a style={{color: "black" }}> +1-800-654-3210 </a>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default ContactBar;
