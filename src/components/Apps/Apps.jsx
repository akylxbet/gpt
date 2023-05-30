import React from "react";
import s from "./Apps.module.scss";
const Apps = () => {
  return (
    <div className={s.apps}>
      <div className={s.apps_title}>
        <div className={s.apps_title_left}>
          <img className={s.apps_title_left_photo} src="/girl.png" alt="img" />
        </div>
        <div className={s.apps_title_right}>
          <div className={s.apps_title_right_desc}>
            <h4>Request Early Access to Get Started</h4>
            <h2>
              The possibilities are <br /> beyond your imagination
            </h2>
            <h6>
              Yet bed any for travelling assistance indulgence unpleasing. Not{" "}
              <br /> thoughts all exercise blessing. Indulgence way everything
              joy <br /> alteration boisterous the attachment. Party we years to
              order <br /> allow asked of.
            </h6>
            <h5>Request Early Access to Get Started</h5>
          </div>
        </div>
      </div>

      <div className={s.apps_title_down}>
        <div className={s.apps_title_down_title}>
            <p>Request Early Access to Get Started</p>
            <h2>Register today & start exploring the endless possiblities.</h2>
        </div>
        <div className={s.apps_title_down_btn}>
            <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Apps;
