import React from "react";
import s from './Footer.module.css'

type ContactPropsType = {}
export const Footer = (props: ContactPropsType) => {

    return (
        <div className={s.container}>
            <div className={s.footerBox}>
                <h2>Danil Tkachenko</h2>
              <div className={s.boxes}>
                  <div className={s.box}></div>
                  <div className={s.box}></div>
                  <div className={s.box}></div>
                  <div className={s.box}></div>
              </div>
                <div>©️ 2019 все права защишены</div>
            </div>
        </div>
    )
}
