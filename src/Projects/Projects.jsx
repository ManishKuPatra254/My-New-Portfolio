import React, { Fragment, useState, useEffect, useRef } from 'react'
import transition from '../Transition'
import styles from './Projects.module.css'
import netflix from '../Images/netflix clone.png'
import powerfitness from '../Images/powerfitness.png'
import custts from '../Images/custts.png'
import twitter from '../Images/twitter.png'
import gsap from 'gsap'
import kanban from '../Images/kanban.png'
import { Link } from 'react-router-dom'
import CallMadeIcon from '@mui/icons-material/CallMade';


function Projects() {

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

    const [hoverImagePop, setHoverImagePop] = useState(null);

    const projects = [

        {
            title: "Netflix Clone",
            src: netflix,
            color: "#000000",
            techstack: 'Jsx , Css , React Js , Google Firebase , Material UI',
            visit: 'https://netflix-clone-254.vercel.app/',
            source: 'https://github.com/ManishKuPatra254/Netflix-Clone',
        },

        {
            title: "Power Fitness",
            src: powerfitness,
            color: "#000000",
            techstack: 'Jsx , Css , React Js  , Material UI',
            visit: 'https://power-fitness-ten.vercel.app/',
            source: 'https://github.com/ManishKuPatra254/Gym-Website',
        },

        {
            title: "Cust TS",
            src: custts,
            color: "red",
            techstack: 'Jsx , Css ,React Js , Material UI , Redux , Auth0',
            visit: 'https://cust-ts.vercel.app/',
            source: 'https://github.com/ManishKuPatra254/Cust-Ts',
        },

        {
            title: "Twitter Clone",
            src: twitter,
            color: "#EFE8D3",
            techstack: 'Jsx , Css , React Js , Material UI , Redux ,  API',
            visit: 'https://twitter-clone-omega-plum.vercel.app/',
            source: 'https://github.com/ManishKuPatra254/Twitter-Clone',
        },

        {
            title: "Kanban Board Clone",
            src: kanban,
            color: "#706D63",
            techstack: 'Jsx , Css ,React Js , Material UI , Redux',
            visit: 'https://kanban-board-zeta-sage.vercel.app/',
            source: 'https://github.com/ManishKuPatra254/Kanban-Board-Project',
        }
    ]

    return (
        <Fragment>
            <div className={styles.main_projects}>
                <h1 ref={h1Ref}>Projects</h1>
                <div className={styles.sub_projects_se}>
                    {
                        projects.map((project, index) => (
                            <div key={index}
                                onMouseEnter={() => setHoverImagePop(index)}
                                onMouseLeave={() => setHoverImagePop(null)}
                                className={`${styles.project_titles_s} ${hoverImagePop === index ? styles.hovered_image_get : ''}`}>
                                <h2>{project.title}</h2>
                                <div className={styles.techstack_us_here}>
                                    <p>{project.techstack}</p>
                                    <div className={styles.btn1}>
                                        <Link to={project.visit} target='blank'><button>Visit website <CallMadeIcon sx={{
                                            color: 'white',
                                            '@media screen and (max-width: 900px)': {
                                                color: '#61677A'
                                            },
                                        }} /></button></Link>

                                        <Link to={project.source} target='blank'><button>Source code <CallMadeIcon sx={{
                                            color: 'white',
                                            '@media screen and (max-width: 900px)': {
                                                color: '#61677A'
                                            },
                                        }} /></button></Link>
                                    </div>
                                </div>


                                {
                                    hoverImagePop === index && (
                                        <div className={styles.pop_img_h_in}>
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default transition(Projects)