import React from "react";
import { Input } from "antd";
import s from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.hero_title}>
        <div className={s.hero_title_desc}>
          <h1>
            Let’s Build Something <br />
            amazing with GPT-3 <br />
            OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. <br />{" "}
            Not thoughts all exercise blessing. Indulgence way <br /> everything
            joy alteration boisterous the attachment. Party <br /> we years to
            order allow asked of.
          </p>
          <div className={s.hero_title_input}>
            <div className={s.hero_title_input_input}>
            <Input placeholder="Your Email Address" />
            </div>
            <div className={s.hero_title_input_btn}>
              <button>Get Started</button>
            </div>
          </div>
          <div className={s.hero_title_desc_otzivi}>
            <div className={s.hero_title_desc_otzivi_photo}>
                <img src="/otzivi.svg" alt="sefsef" />
            </div>
            <div className={s.hero_title_desc_otzivi_title}>
            <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
        </div>
        <div className={s.hero_title_photo}>
          <img src="/head.png" alt="img" />
        </div>
    
      </div>  
        <div className={s.hero_title_google}>
            <img src="/gogle.svg" alt="" />
        </div>
    </div>
  );
};

export default Hero;