import React from "react";
import s from "./Blogging.module.scss";
import Cards from "../Cards/Cards";
const Blogging = () => {
  return (
    <section className={s.Blogging}>
      <h3>
        A lot is happening, <br /> We are blogging about it.
      </h3>
      <div className={s.blocks}>
        <div className={s.left_block}>
          <div className={s.image}>
            <img src="bigimg.png" alt="" />
          </div>
          <div className={s.descript}>
            <p>Sep 26, 2021</p>
            <h6>GPT-3 and Open AI is the future. Let us exlore how it is?</h6>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className={s.right_blocks}>
          <div className={s.upper_blocks}>
            <Cards>
              <img src="first.png" alt="img" />
            </Cards>
            <Cards>
              <img src="second.png" alt="img" />
            </Cards>
          </div>
          <div className={s.bottom_blocks}>
            <Cards>
              <img src="third.png" alt="img" />
            </Cards>
            <Cards>
              <img src="fourth.png" alt="img" />
            </Cards>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogging;
