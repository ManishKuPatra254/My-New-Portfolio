/* eslint-disable react-refresh/only-export-components */
import { Fragment, useEffect, useRef } from 'react'
import transition from '../Transition'
import style from './Skills.module.css'
import gsap from 'gsap'

function Skills() {

    const h1Ref = useRef(null);

    useEffect(() => {
        const text = h1Ref.current.textContent;
        const letters = text.split('');

        h1Ref.current.textContent = '';

        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline';
            h1Ref.current.appendChild(span);

            gsap.from(span, {
                duration: 4.9,
                opacity: 0,
                y: 20,
                delay: index * 0.1,
            });
        });
    }, []);


    const skills = [

        {
            title: "Html",
        },

        {
            title: "Css",
        },

        {
            title: "JavaScript",
        },

        {
            title: "React Js",
        },

        {
            title: "Material UI",
        },

        {
            title: "Bootstrap",
        },

        {
            title: "Figma",
        },
    ]

    return (
        <Fragment>
            <div className={style.main_skills_add}>
                <h1 ref={h1Ref}>Skills</h1>
                <div className={style.p_main_skills}>
                    <div className={style.sub_main_skills}>
                        {
                            skills.map((items, indexes) => (
                                <div className={style.primary_skills_imp} key={indexes}>
                                    <p>{items.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default transition(Skills)