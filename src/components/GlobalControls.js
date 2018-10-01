import React, { Component } from 'react';

import { Howler } from 'howler';

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

class GlobalControls extends Component {
    state = {
        value: 50,
    }

    handleChange = value => {
        Howler.volume(value / 100.0);
        this.setState({ value });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <Slider value={value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default injectSheet(styles)(GlobalControls);
