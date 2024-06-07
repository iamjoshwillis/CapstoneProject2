import React, { useState, useEffect } from "react";
import axios from "axios";
import SpellDetail from "./SpellDetail";

const SpellList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadSpells() {
      const res = await axios.get("https://hp-api.onrender.com/api/spells/");
      setData(res.data);
    }
    loadSpells();
  }, []);

  if (!data) return <h3>Loading...</h3>;

  return (
    <div className="text-center">
      <h1 className="text-3xl p-6 font-bold text-slate-100 text-center">Spell Curriculum</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {data &&
          Object.values(data).map((spell) => (
            <SpellDetail
              key={spell.id}
              id={spell.id}
              name={spell.name}
              description={spell.description}
            />
          ))}
      </div>
    </div>
  );
};

export default SpellList;
