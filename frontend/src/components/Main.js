import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <main className='content'>
        <section className='profile'>
          <div className='profile__content'>
            <button
              onClick={onEditAvatar}
              className='profile__avatar'
              type='button'
            >
              <img src={currentUser.avatar} className='profile__avatar-edit' />
            </button>
            <div className='profile__info'>
              <h1 className='profile__name'>{currentUser.name}</h1>
              <button
                type='button'
                onClick={onEditProfile}
                className='profile__edit-button'
              ></button>
              <p className='profile__bio'>{currentUser.about}</p>
            </div>
          </div>
          <button onClick={onAddPlace} className='profile__add-button' />
        </section>
        <section className='grid-element'>
          <div className='elements'>
            {cards.map((card) => {
              return (
                <Card
                  card={card}
                  key={card._id}
                  name={card.name}
                  link={card.link}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
export default Main;
