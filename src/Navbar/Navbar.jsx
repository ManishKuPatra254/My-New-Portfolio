import  { Fragment, useEffect, useRef, useState } from 'react'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Avatar } from '@mui/material';
import logo1 from '../Images/pngwing.com.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import gsap from 'gsap';
import { useAnimate, stagger } from "framer-motion";
import CallMadeIcon from '@mui/icons-material/CallMade';


function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(0%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ]
            : [
                [
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [isOpen, animate]);

    return scope;
}

const Path = (props) => (
    <path
        fill="transparent"
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
        {...props}
    />
);



export function Navbar() {

    const navigateHome = useNavigate()

    function handleNavbarHome() {
        setActiveItem('home');
        navigateHome('/')
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const [activeItem, setActiveItem] = useState('home');
    function handleNavbarClick(item) {
        setActiveItem(item);
    }

    const navRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.3 } });

        if (setMenuOpen(menuOpen)) {
            tl.to(navRef.current, { width: '100%', duration: 0.2 })
                .to(menuRef.current, { x: 0, duration: 0.2, stagger: 0.1 });
        } else {
            tl.to(menuRef.current, { x: -200, duration: 0.2, stagger: -0.1 })
                .to(navRef.current, { width: '50px', duration: 0.2 }, '-=0.2');
        }
    }, [menuOpen]);

    // ....................... 

    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    // .........................


    return (
        <Fragment>

            <div className={style.main_sec_navbar}>
                <div className={style.heading}>
                    <Stack direction="row" spacing={2}>
                        <Avatar onClick={handleNavbarHome} alt="Manish Kumar" src={logo1} />
                    </Stack>
                </div>
                <div className={`${style.listing_sec_nav} ${menuOpen ? style.menuopen_ham : ''}`}>
                    <ul>
                        <Link to="/about" className={activeItem === 'about' ? style.active : ''} onClick={() => handleNavbarClick('about')}>
                            <li style={{ color: activeItem === 'about' ? 'red' : 'white' }}>
                                About
                            </li>
                        </Link>

                        <Link to="/skills" className={activeItem === 'skills' ? style.active : ''} onClick={() => handleNavbarClick('skills')}>
                            <li style={{ color: activeItem === 'skills' ? 'red' : 'white' }}>
                                Skills
                            </li>
                        </Link>

                        <Link to="/projects" className={activeItem === 'projects' ? style.active : ''} onClick={() => handleNavbarClick('projects')}>
                            <li style={{ color: activeItem === 'projects' ? 'red' : 'white' }}>
                                Projects
                            </li>
                        </Link>

                        <Link to="/contact" className={activeItem === 'contact' ? style.active : ''} onClick={() => handleNavbarClick('contact')}>
                            <li style={{ color: activeItem === 'contact' ? 'red' : 'white' }}>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={style.icons_ref}>
                    <a href='https://github.com/ManishKuPatra254' target='blank'> GitHub<CallMadeIcon /></a>

                    <a href='https://www.linkedin.com/in/manish-kumar-patra-10448b188/'
                        target='blank'>
                        LinkedIn<CallMadeIcon /></a>
                </div>

                <div className={style.ham_menu_cond} ref={scope} onClick={() => setIsOpen(!isOpen)}>
                    <button>
                        <svg width="23" height="18" viewBox="0 0 23 18">
                            <Path
                                d="M 2 2.5 L 20 2.5"
                                className="top"
                                variants={{
                                    closed: { d: "M 2 2.5 L 20 2.5" },
                                    open: { d: "M 3 16.5 L 17 2.5" }
                                }}
                            />
                            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
                            <Path
                                d="M 2 16.346 L 20 16.346"
                                className="bottom"
                                variants={{
                                    closed: { d: "M 2 16.346 L 20 16.346" },
                                    open: { d: "M 3 2.5 L 17 16.346" }
                                }}
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <nav className={style.menu}>
                            <ul>
                                <Link to={'/'}><li>Home</li></Link>
                                <Link to={'/about'}><li>About</li></Link>
                                <Link to={'/skills'}><li>Skills</li></Link>
                                <Link to={'/projects'}><li>Projects</li></Link>
                                <Link to={'/contact'}><li>Contact</li></Link>
                                <div className={style.accouns_links}>
                                    <a href='https://www.linkedin.com/in/manish-kumar-patra-10448b188/' target='blank'> <LinkedInIcon /></a>
                                    <a href='https://github.com/ManishKuPatra254' target='blank'> <GitHubIcon /></a>
                                </div>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </Fragment>
    )
}
