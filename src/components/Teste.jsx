import { InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export const Teste = () => {
  const [dadosPlanos, setDadosPlanos] = useState([]);

  const req = async () => {
    const response = await fetch("https://onpartage-backend.herokuapp.com/plans");
    const dados = await response.json();
    setDadosPlanos(dados);
  };

  useEffect(() => req(), []);

  const nomePlanos = dadosPlanos.map((item, index) => <MenuItem>{item.name}</MenuItem>)

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {nomePlanos}
        </Select>
      </FormControl>
    </div>
  );
};
