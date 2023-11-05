import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_photo ${card.link ? "popup_opened" : ""}`}>
      <div className='popup__images'>
        <button className='popup__container-close' onClick={onClose}></button>
        <img className='popup__image' src={card.link} alt={card.name} />
        <p className='popup__photo-text'>{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
