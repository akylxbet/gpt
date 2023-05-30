import React from "react";
import s from "./Card.module.scss";
import CardLeft from "./CardLeft/CardLeft";
import { card } from "@/constans/card";
const Card = ({}) => {
  return (
    <div className={s.card}>
      <div className={s.card_title}>
        <div className={s.card_title_desc}>
          <h1>
            A lot is happening, <br /> We are blogging about it.
          </h1>
        </div>
        <div className={s.card_all}>
          <div className={s.card_title_right}>
            <div className={s.card_title_right_card}>
              <div className={s.card_title_right_card_photo}>
                <img src="/onexero.png" alt="img" />
              </div>
              <div className={s.card_title_right_card_title}>
                <div className={s.card_title_right_card_title_date}>
                  <h5>Sep 26, 2021</h5>
                </div>
                <div className={s.card_title_right_card_title_desc}>
                  <h1>
                    GPT-3 and Open AI is the <br /> future. Let us exlore how it{" "}
                    <br /> is?
                  </h1>
                </div>
                <div className={s.card_title_right_card_title_down}>
                  <h4>Read Full Article</h4>
                </div>
              </div>
            </div>
          </div>
         <div className={s.card_left}>
            { card.map ((item) => {
                return <CardLeft id={item.id} img={item.img} date={item.date} text={item.text} desc={item.desc} />

            })}
         </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
