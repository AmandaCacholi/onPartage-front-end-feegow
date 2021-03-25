import { InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export const Teste = () => {
  const [dadosPlanos, setDadosPlanos] = useState([]);

  const req = async () => {
    const response = await fetch("http://localhost:8080/plans");
    const dados = await response.json();
    setDadosPlanos(dados);
  };

  useEffect(() => req(), []);

  const nomePlanos = dadosPlanos.map((item, index) => {
    // <MenuItem key={index} >{item.name}</MenuItem>
    <li>{item.nome}</li>
  })

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {/* {nomePlanos} */}
        </Select>
      </FormControl>
      <ul>
          {nomePlanos}
      </ul>
    </div>
  );
};
