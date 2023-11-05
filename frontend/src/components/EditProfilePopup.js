import { useEffect, useContext, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onChanging }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name='edit-profile'
      title='Редактировать профиль'
      buttonText={onChanging ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__form-input popup__form-input_name'
        name='name'
        type='text'
        placeholder='Введите ваше имя'
        minLength={2}
        maxLength={40}
        required
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className='popup__error' />
      <input
        className='popup__bio popup__form-input popup__form-input_bio'
        name='info'
        type='text'
        placeholder='Введите ваш род занятий'
        minLength={2}
        maxLength={200}
        required
        value={description || ""}
        onChange={handleChangeDescription}
      />
      <span className='popup__error' />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
