import React from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import injectSheet from 'react-jss';

const styles = {
    root: {
        float: 'right',
        width: '100%',
    },
    '@media (min-width: 960px)': {
        root: {
            width: '33.33%',
        }
        }
}

const GlobalControls = ({ classes }) => (
    <div className={classes.root}>
        <Slider />
    </div>
);

export default injectSheet(styles)(GlobalControls);
