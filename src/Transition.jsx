import { motion } from 'framer-motion';
import { Fragment } from 'react';

const Transition = (OgComponent) => {
    const WrappedComponent = () => (
        <Fragment>
            <OgComponent />
            <motion.div
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [.22, 1, .36, 1] }}
            />

            <motion.div
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [.22, 1, .36, 1] }}
            />
        </Fragment>
    );
    WrappedComponent.displayName = `Transition(${getDisplayName(OgComponent)})`;
    return WrappedComponent;
}
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default Transition;