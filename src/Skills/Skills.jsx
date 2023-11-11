/* eslint-disable react-refresh/only-export-components */
import { Fragment, useEffect, useRef } from 'react'
import transition from '../Transition'
import style from './Skills.module.css'
import htmllogo from '../Images/png-transparent-html5-icon-•-html-social-network-icon 1.png'
import csslogo from '../Images/png-transparent-html5-icon-•-css-social-network-icon 1.png'
import jslogo from '../Images/png-transparent-html5-icon-•-js-social-network-icon 1.png'
import reactjslogo from '../Images/png-transparent-html5-icon-•-react-social-network-icon 1.png'
import bootstraplogo from '../Images/png-transparent-html5-icon-•-boot-social-network-icon 1.png'
import figmalogo from '../Images/png-transparent-html5-icon-•-figma-social-network-icon 1.png'
import muilogo from '../Images/png-transparent-html5-icon-•-mui-social-network-icon 1.png'
import gitlogo from '../Images/png-transparent-html5-icon-•-git-social-network-icon 1.png'
import gitlablogo from '../Images/png-transparent-html5-icon-•-gitlab-social-network-icon 1.png'
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
                duration: 0.9,
                opacity: 0,
                y: 20,
                delay: index * 0.1,
            });
        });
    }, []);


    return (
        <Fragment>
            <div className={style.main_skills_add}>
                <h1 ref={h1Ref}>Skills</h1>
                <section className={style.services_container}>
                    <div className={style.row}>
                        <div className={style.item}>
                            <img src={htmllogo} alt="" />
                            <h2>HTML</h2>
                        </div>

                        <div className={style.item}>
                            <img src={csslogo} alt="" />
                            <h2>CSS</h2>
                        </div>

                        <div className={style.item}>
                            <img src={jslogo} alt="" />
                            <h2>Javascript</h2>
                        </div>

                        <div className={style.item}>
                            <img src={reactjslogo} alt="" />
                            <h2>React Js</h2>
                        </div>

                        <div className={style.item}>
                            <img src={bootstraplogo} alt="" />
                            <h2>Bootstrap</h2>
                        </div>

                        <div className={style.item}>
                            <img src={figmalogo} alt="" />
                            <h2>Figma</h2>
                        </div>

                        <div className={style.item}>
                            <img src={muilogo} alt="" />
                            <h2>Material UI</h2>
                        </div>

                        <div className={style.item}>
                            <img src={gitlogo} alt="" />
                            <h2>Github</h2>
                        </div>
                        <div className={style.item}>
                            <img src={gitlablogo} alt="" />
                            <h2>Git</h2>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}
export default transition(Skills)