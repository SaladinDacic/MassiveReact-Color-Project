import React from 'react';
import {withStyles} from "@material-ui/styles";


const styles= {
    main:{
        backgroundColor: "purple",
        border: "3px solid teal"
    },
    secoundary:{
        backgroundColor: "teal",
        "& h1":{
            color: "white",
            "& span":{
                backgroundColor: "yellow"
            }
        }
    }
}

function MiniPalette(props) {
    const {classes} = props;
    console.log(classes);
    return (
        <div className={classes.main}>
            <h1>Mini Palette</h1>
            <section className={classes.secoundary}>
                <h1>another h1<span>yellow</span></h1>
            </section>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);