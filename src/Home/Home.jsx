/* eslint-disable react-refresh/only-export-components */
import { Fragment } from 'react'
import transition from '../Transition'
import { Herosec } from '../Herosec/Herosec'

function Home() {
    return (
        <Fragment>
            <Herosec />
        </Fragment>
    )
}

export default transition(Home)

