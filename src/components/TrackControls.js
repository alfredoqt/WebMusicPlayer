import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { FaPlayCircle, FaStepBackward, FaStepForward } from 'react-icons/fa';

import injectSheet from 'react-jss';

const styles = {
    trackControls: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px',
        fontSize: '24px',
    },
};

const Controls = ({ classes }) => (
    <div>
        <div className={classes.trackControls}>
            <FaStepBackward />
            <FaPlayCircle />
            <FaStepForward />
        </div>
        <div>
            <Slider defaultValue={50} />
        </div>
    </div>
);

export default injectSheet(styles)(Controls);
