//Попапы
const popAvatarEdit = ".popup_avatar-edit";

// Формы
const popEditForm = document.forms["edit__form"];
const popAddForm = document.forms["add__form"];
const popAvatarForm = document.forms["edit__avatar-form"];

// Avatar Input
const inpAvatarLink = popAvatarForm.querySelector(".popup__form-input_link");

// Кнопки
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileAddBtn = document.querySelector(".profile__add-button");
const profileAvatarBtn = document.querySelector(".profile__avatar-edit");

// Селекторы
const popupImageSelector = ".popup_photo";
const elementContainer = ".elements";
const elementTemplate = "#element";

const profileSelector = {
  selectorName: ".profile__name",
  selectorProf: ".profile__bio",
  selectorAvatar: ".profile__avatar-edit",
};

const validationSettings = {
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-submit",
  inactiveButtonClass: "popup__form-submit_invalid",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__error_visible",
};

// экспорт
export {
  popAvatarEdit,
  popEditForm,
  popAddForm,
  popAvatarForm,
  inpAvatarLink,
  profileEditBtn,
  profileAddBtn,
  profileAvatarBtn,
  popupImageSelector,
  elementContainer,
  elementTemplate,
  profileSelector,
  validationSettings,
};
