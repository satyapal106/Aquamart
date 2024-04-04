import React from 'react'
import { makeStyles } from '@mui/styles';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
    root: {
        width: "100%",

    },
    thumb: {
        color: "#000",
    },
    rail: {
        color: "#000",
    },
    track: {
        color: '#000',
    },


});




const SliderProton = ({ value, changePrice }) => {
    const classes = useStyles();
    return <div className={classes.root}>
        <Slider
            value={value}
            onChange={changePrice}
            valueLabelDisplay="on"
            min={5000}
            max={20000}
            classes={
                {
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track,
                }

            } />

    </div>
}

export default SliderProton




