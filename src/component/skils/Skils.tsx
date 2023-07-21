import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from './Skils.module.css'
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faCss3Alt, faReact} from "@fortawesome/free-brands-svg-icons";

type SkilsPropsType={

}
const skillsObject = [
    {id:1,skill:'CSS',text:'подробное описание уменя',icon: faJs},
    {id:2,skill:'JS',text:'подробное описание уменя',icon:faCss3Alt},
    {id:3,skill:'React',text:'подробное описание уменя',icon:faReact}]
export const Skills=(props:SkilsPropsType)=>{
const mapSkills = skillsObject.map(el=><div key={el.id} className={s.skill}><FontAwesomeIcon className={s.icon} icon={el.icon} beat /><div className={s.nameSkill}>{el.skill}</div><div>{el.text}</div></div>)
    return(
        <div className={s.container}>
            <div className={s.skillsBox}>
                                <div className={s.headerText}>My Skills</div>
                <div className={s.skills}>{mapSkills}</div>
            </div>
        </div>
    )
}
