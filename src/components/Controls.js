import React from 'react';

import { FaPlayCircle, FaStepBackward, FaStepForward } from 'react-icons/fa';

const Controls = ({ classes }) => (
    <div>
        <FaStepBackward />
        <FaPlayCircle />
        <FaStepForward />
    </div>
);

export default Controls;
