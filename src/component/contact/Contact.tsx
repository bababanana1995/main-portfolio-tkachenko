import React from "react";
import s from './Contact.module.css'

type ContactPropsType = {}
export const Contact = (props: ContactPropsType) => {

    return (
        <div className={s.container}>
            <div className={s.contactBox}>
                <h2>Contact</h2>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <div><textarea name="text" id="" rows={8}
                                   placeholder={'Enter info about your'}></textarea></div>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}
