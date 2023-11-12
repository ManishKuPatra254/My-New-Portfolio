/* eslint-disable react-refresh/only-export-components */
import { Fragment, useEffect, useRef } from 'react'
import gsap from 'gsap';
import transition from '../Transition'
import style from './About.module.css'
import team from '../Images/Team.gif'
import resume from '../Images/Manish Kumar Patra Resume.pdf'

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
                duration: 4.9,
                opacity: 0,
                y: 20,
                delay: index * 0.1,
            });
        });
    }, []);


    return (
        <Fragment>
            <div className={style.main_about_p}>
                <h1 ref={h1Ref}>About Me</h1>
                <div className={style.sub_main_me_about_im}>
                    <div className={style.sub_main_about}>
                        <div className={style.about_me_p}>
                            <p>I am Manish , a dedicated and collaborative Front-End Developer hailing from the vibrant state of Odisha. With a passion for crafting creating best user experiences and a commitment to delivering high-quality projects.
                            </p>

                            <p>Throughout my career , not only in my technical skills but also have strong aptitude for teamwork. I take pride in my ability to collaborate effectively with different teams, ensuring the successful execution of projects.</p>

                            <p>Across all these , I have honed my skills in creating visually appealing and functionally front-end solutions. My portfolio includes projects that showcase my ability to adapt to varying project requirements.I am open to internships, entry-level positions, or any opportunity that allows me to grow as a Frontend developer.Thank you for considering my profile.</p>
                        </div>

                        <div className={style.about_me_im_g}>
                            <img src={team} alt="" />
                            <div className={style.contact_about_info}>
                                <label htmlFor="">Email</label>
                                <p> manishpatra254@gmail.com</p>
                                <label htmlFor="">Phone</label>
                                <p> +91 8018095289</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.main_experience_about}>
                    <div className={style.sub_experience_about}>
                        <h2>Experience</h2>
                        <a href={resume} target='blank'><button>Download CV</button></a>
                    </div>
                    <div className={style.experience_detail_s}>
                        <p>March 2023 - August 2023</p>
                        <div className={style.details_experience_s}>
                            <h4>Function Up</h4>
                            <p>Frontend Developer Trainee</p>
                            <p>Completed an intensive front-end development internship
                                program focused on modern web technologies.Acquired proficiency in HTML, CSS, JavaScript and frontend frameworks like ReactJS, Bootstrap, Material UI.
                                Gained practical experience in building interactive web application through hands-on coding projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default transition(About)
