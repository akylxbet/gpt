import React from 'react';
import s from "./About.module.scss"
const About = () => {
    return (
        <div className={s.about}>
            <div className={s.about_box}>
                <div className={s.about_box_title}>
                <div className={s.about_box_logo}>
                    <h1>What is GPT-3</h1>
                </div>
                <div className={s.about_box_title_desc}>
                    <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His <br /> defective nor convinced residence own. Connection has put impossible own apartments <br /> boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                </div>
                </div>
                <div className={s.about_box_information}>
                    <div className={s.about_box_information_logo}>
                        <h1>The possibilities are beyond <br /> your imagination</h1>
                    </div>
                    <div className={s.about_box_information_desc}>
                        <p>Explore The Library</p>
                    </div>
                </div>
                <div className={s.about_box_down}>
                    <div className={s.about_box_down_first}>
                        <h1>Chatbots</h1>
                        <p>We so opinion friends me message as <br /> delight. Whole front do of plate heard oh <br /> ought. </p>
                    </div>
                    <div className={s.about_box_down_to}>
                        <h1>Knowledgebase</h1>
                        <p>At jointure ladyship an insisted so humanity <br /> he. Friendly bachelor entrance to on by. <br /> As put impossible own apartments b</p>
                    </div>
                    <div className={s.about_box_down_three}>
                        <h1>Education</h1>
                        <p>At jointure ladyship an insisted so humanity <br /> he. Friendly bachelor entrance to on by. As <br /> put impossible own apartments b</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;