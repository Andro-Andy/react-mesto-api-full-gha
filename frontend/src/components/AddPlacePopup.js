import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  function changeName(e) {
    setName(e.target.value);
  }

  function сhangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name='add'
      title='Новое место'
      buttonText='Создать'
      onSubmit={handleSubmit}
    >
      <input
        className='name popup__form-input popup__form-input_name'
        name='name'
        type='text'
        placeholder='Название'
        minLength={2}
        maxLength={30}
        required=''
        value={name}
        onChange={changeName}
      />
      <span className='popup__error' />
      <input
        className='popup__link link popup__form-input'
        name='link'
        type='url'
        placeholder='Ссылка на картинку'
        required=''
        value={link}
        onChange={сhangeLink}
      />
      <span className='popup__error' />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
