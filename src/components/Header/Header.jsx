import React from "react";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header_title}>
        <div className={s.header_logo}>
          <img src="/logo.svg" alt="img" />
        </div>
        <div className={s.header_title_nav}>
          <a href="#">Home</a>
          <a href="#">What is GPT?</a>
          <a href="#">Open AI</a>
          <a href="#">Case Studies</a>
          <a href="#">Library</a>
        </div>
        <div className={s.header_title_btn}>
          <div className={s.header_title_btn_login}>
            <button>Sign in</button>
          </div>
          <div className={s.header_title_btn_sighnin}>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
