import React from "react";
import s from "./CardLeft.module.scss";
const CardLeft = ({ img, date, text, desc }) => {
  return (
    <div>
      <div className={s.card_title_left}>
        <div className={s.card_title_left_card}>
          <div className={s.card_title_left_card_title_photo}>
            <img src={img} alt="img" />
          </div>
          <div className={s.card_title_left_card_title}>
            <div className={s.card_title_left_card_title_date}>
              <h7>{date}</h7>
            </div>
            <div className={s.card_title_left_card_title_desc}>
              <h5>{text}</h5>
            </div>
            <div className={s.card_title_left_card_title_down}>
              <h6>{desc}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft;
