import React from "react";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  buttonText,
  onSubmit,
}) {
  return (
    <>
      <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className='popup__container'>
          <button className='popup__container-close' onClick={onClose} />
          <h3 className='popup__container-info'>{title}</h3>
          <form className='popup__form' name={`${name}`} onSubmit={onSubmit}>
            {children}
            <button className='popup__form-submit' type='submit'>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
