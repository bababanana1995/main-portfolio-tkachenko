import React from "react";
import s from './MyProjects.module.css'
import {Link} from "react-router-dom";

type MyProjectsPropsType={

}
const myProjectsArray = [
    {id:1,class:s.imageWidthButton1,title:'Counter',description:'Counter width redux', link:'https://cardstudents.vercel.app/'},
    {id:2,class:s.imageWidthButton2,title:'Students Card',description:'Students card with redux',link:'https://cardstudents.vercel.app/'},
]
console.log(myProjectsArray[0].class)
export const MyProjects=(props:MyProjectsPropsType)=>{
const mapMyProjects = myProjectsArray
    .map(el=><div key={el.id} className={s.myProject}>
            <div className={`${s.imageWidthButton} ${el.class}`}>
                <Link to={el.link}>
                    <button>Смотреть</button>
                </Link>
            </div>
    <div className={s.title}>{el.title}</div>
    <div className={s.description}>{el.description}</div>
</div>
)
    return(
        <div className={s.container}>
<div className={s.myProjectsBox}>
<h2>My projects</h2>
    <div className={s.myProjects}>
        {mapMyProjects}
    </div>
</div>
        </div>
    )
}
