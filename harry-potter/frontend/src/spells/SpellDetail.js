import React, { useState, useEffect } from "react";
import axios from "axios";


const SpellDetail = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadSpells() {
            const res = await axios.get("https://api.potterdb.com/v1/spells/e4e30085-14df-4de2-8888-4bce50f50ea3");
            setData([res.data]);
    }
    loadSpells();
}, [])

    if(!data) return <h3>Loading...</h3>

    return (
        <div>
        <h1>Spells</h1>
        <h3>{data.attributes.name}</h3>
        </div>
    )
}

export default SpellDetail;