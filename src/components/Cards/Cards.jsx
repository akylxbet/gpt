import React from "react";
import s from "./Cards.module.scss";
const Cards = ({children}) => {
  return (
    <div className={s.card}>
        <div className={s.image}>
        {children}
        </div>
      <div className={s.description}>
        <p>Sep 26, 2021</p>
        <h6>GPT-3 and Open AI is the future. Let us exlore how it is?</h6>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Cards;
