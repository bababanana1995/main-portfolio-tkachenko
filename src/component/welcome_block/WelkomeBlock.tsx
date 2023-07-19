import React from "react";
import s from './WelcomeBlock.module.css'
import avatar from '../common/img/ava.jpg'
type WelcomeBlockPropsType={

}
export const WelcomeBlock=(props:WelcomeBlockPropsType)=>{

    return(
        <div className={s.welcome}>
            <div className={s.welcomeBlock}>
                <h2>Hi,my name</h2>
                <h1>Danil Tkachenko</h1>
                <h2>I'm frontend Developer</h2>
            </div>
            <div><img className={s.ava} src={avatar} alt="ava"/></div>
        </div>
    )
}
