import React from 'react'
import withcallApi from '../hoc/withcallApi';
import classes from './TraductorFrToEs.module.css'

const TraductorFrToEs = (props) => {
    const translatedText = props.traduction?.data?.translations[0].translatedText;
    return (
        <>
            <h1>Traduction Français vers Espagnol : </h1>
            <p classes={classes['txtTraduit']}>{translatedText}</p>
        </>
    )
}

const TraductorEs = withcallApi(TraductorFrToEs, "es", "fr");

export default TraductorEs;