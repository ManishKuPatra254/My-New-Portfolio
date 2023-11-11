/* eslint-disable react-refresh/only-export-components */
import  { Fragment, useEffect, useRef } from 'react'
import gsap from 'gsap';
import transition from '../Transition'
import style from './About.module.css'

function About() {
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
                duration: 2.9,
                opacity: 0,
                y: 20,
                delay: index * 0.1,
            });
        });
    }, []);

    return (
        <Fragment>
            <div className={style.main_about_p}>
                <h1 ref={h1Ref}>About</h1>
            </div>
        </Fragment>
    )
}

export default transition(About)
