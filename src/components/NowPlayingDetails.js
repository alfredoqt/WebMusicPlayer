import React, { Fragment } from 'react';
import injectSheet from 'react-jss';

import AlbumPlaceholder from '../img/album-placeholder.jpg';

import { connect } from 'react-redux';
import { getCurrentIndex, getTracks } from '../reducers';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    coverArtContainer: {
        marginRight: '16px',
    },
    coverArt: {
        width: '56px',
        height: '56px',
    },
};

const NowPlayingDetails = ({ classes, currentIndex, tracks }) => (
    <div className={classes.root}>
        <div className={classes.coverArtContainer}>
            <img src={AlbumPlaceholder} placeholder="Album" className={classes.coverArt}/>
        </div>
        <div>
            { currentIndex !== null
            ?
            (
                <Fragment>
                    <div>
                        {tracks[currentIndex].name}
                    </div>
                    <div>
                        Album
                    </div>
                </Fragment>    
            )
            :
            (
                <Fragment>
                    <div>
                        Complicado y Aturdido
                    </div>
                    <div>
                        Album
                    </div>
                </Fragment>
            )
            }
        </div>
    </div>
);

export default connect(state => ({
    tracks: getTracks(state),
    currentIndex: getCurrentIndex(state),
}))(injectSheet(styles)(NowPlayingDetails));
