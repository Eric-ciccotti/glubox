import React from 'react'
import withcallApi from '../hoc/withcallApi';
import classes from './TraductorFrToCh.module.css'

const TraductorFrToCh = (props) => {
    const translatedText = props.traduction?.data?.translations[0].translatedText;
    return (
        <>
            <h1>Traduction Français vers Chinois : </h1>
            <p classes={classes['txtTraduit']}>{translatedText}</p>
        </>
    )
}

const TraductorCh = withcallApi(TraductorFrToCh, "zh", "fr");

export default TraductorCh;