import React from 'react';

import injectSheet from 'react-jss';
import TrackControls from './TrackControls';
import NowPlayingDetails from './NowPlayingDetails';
import GlobalControls from './GlobalControls';

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 101,
        backgroundColor: '#181818',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center',
        padding: '16px',
    },
    footerItem: {
        flex: 1,
    }
};

const Footer = ({ classes }) => (
    <div className={classes.root}>
        <div className={classes.content}>
            <div className={classes.footerItem}>
                <NowPlayingDetails />
            </div>
            <div className={classes.footerItem}>
                <TrackControls />
            </div>
            <div className={classes.footerItem}>
                <GlobalControls />
            </div>
        </div>
    </div>
);

export default injectSheet(styles)(Footer);
