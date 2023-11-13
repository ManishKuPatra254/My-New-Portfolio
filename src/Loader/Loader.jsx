import { Fragment } from "react";
import styles from './Loader.module.css'


export function Loader() {

    const wordsChange = [
        {
            mypart: 'my role'
        },

        {
            mypart: 'my skills'
        },
        {
            mypart: 'my projects'
        },
        {
            mypart: 'about me'
        },
        {
            mypart: 'contact me'
        },

    ]
    return (
        <Fragment>
            <div className={styles.card}>
                <div className={styles.loader}>
                    <p>Loading</p>
                    <div className={styles.words}>
                        {
                            wordsChange.map((items, index) => (
                                <span className="" key={index}>{items.mypart}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
