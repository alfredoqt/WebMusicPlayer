import React from 'react';

import injectSheet from 'react-jss';
import Controls from './Controls';

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 101,
        backgroundColor: '#181818',
        height: '90px',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center',
    },
};

const Footer = ({ classes }) => (
    <div className={classes.root}>
        <div className={classes.content}>
            <div>Hello</div>
            <Controls />
            <div>Hello</div>
        </div>
    </div>
);

export default injectSheet(styles)(Footer);
