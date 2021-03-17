import React from "react";
import "./Sobre.css";
import imgAmanda from "../../assets/images/amanda-cacholi.jpg";
import { Time } from "../Time/Time";

export const Sobre = () => {
  return (
    <div className="sobre">
      <div className="sobre__textoWrapper">
        <p className="sobre__texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          ligula lorem. Integer in lorem eget nunc tempor venenatis. Sed risus
          nunc, commodo at posuere id, ullamcorper sed ex. Ut interdum enim
          nisl, non luctus elit dictum sed. Donec consectetur cursus urna, non
          maximus sem blandit quis. Maecenas ornare sem urna, et semper odio
          ultrices ac. Nunc ac porttitor leo. Ut ut suscipit augue. Sed ultrices
          auctor est, nec aliquam diam maximus id. Mauris eu quam vel leo
          suscipit auctor eget et diam. Curabitur in interdum elit. Nulla
          venenatis turpis a faucibus venenatis. Maecenas molestie eros eu
          sapien rutrum, id luctus lacus accumsan. Sed nec sagittis dolor.
        </p>
      </div>
      <div className="sobre__time">
        <Time
          img={imgAmanda}
          nome="Amanda Cacholi"
          titulo="Front End Developer"
        />
        <Time
          img={imgAmanda}
          nome="Amanda Cacholi"
          titulo="Front End Developer"
        />
      </div>
    </div>
  );
};
