import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className='element'>
      <img
        alt={card.name}
        src={card.link}
        onClick={handleClick}
        className='element__image'
      />
      <div className='element__info'>
        {isOwn && (
          <button
            type='button'
            className='element__delete'
            onClick={handleDeleteClick}
          />
        )}
        <h2 className='element__title'>{card.name}</h2>
        <div className='element__like-container'>
          <button
            type='button'
            className={`element__like ${isLiked && "element__like-active"}`}
            onClick={handleLikeClick}
          />
          <span className='element__counter-likes'>{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
