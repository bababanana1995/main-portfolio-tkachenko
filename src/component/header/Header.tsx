import React from "react";
import {Navigation} from "../nav/Nav";
import s from './Header.module.css'

type HeaderPropsType = {}
export const Header = (props: HeaderPropsType) => {

    return (
        <header className={s.header_box}>
            <Navigation/>
        </header>
    )
}
