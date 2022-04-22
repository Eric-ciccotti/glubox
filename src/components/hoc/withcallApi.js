import { useState, useEffect } from "react";
import classes from './withcallApi.module.css'

const withcallApi = (WrappedComponent, langueSource, langueTarget) => (props) => {
    const [data, setData] = useState('')
    const [term, setTerm] = useState('')
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)

    const handleTraductor = () => {
        setSearch(term);
    }

    useEffect(() => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", search);
        encodedParams.append("target", langueSource);
        encodedParams.append("source", langueTarget);

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
                'X-RapidAPI-Key': 'b6ff693ca8mshef22cf2954b3f6fp16084djsn3aa38b030229'
            },
            body: encodedParams
        };

        const fetchData = async () => {
            try {
                const res = await fetch(`https://google-translate1.p.rapidapi.com/language/translate/v2`, options);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error);
            }

        }
        fetchData();
    }, [search])

    const callClasses = `${classes['callApiBox']} ${classes['summary']} ${props.css}`

    return (
        <section className={callClasses}>
            <p>HOC de traduction</p>
            <input type="text" onChange={(e) => setTerm(e.target.value)} value={term} />
            <input type="button" onClick={handleTraductor} value="traduire" />
            <WrappedComponent {...props} traduction={data} source={langueSource} target={langueTarget} />
            {error && <p>Opps il y a une erreur ! : {error.message}</p>}
        </section >
    )
}

export default withcallApi;