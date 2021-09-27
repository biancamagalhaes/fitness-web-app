import React from "react";
import {Container} from "./style";
import Item from "./item";
import requiredMask from "../../../public/images/required-mask.png";
import requiredTowel from "../../../public/images/required-towel.png";
import requiredLockerroom from "../../../public/images/required-lockerroom.png";
import recommendedMask from "../../../public/images/recommended-mask.png";
import recommendedTowel from "../../../public/images/recommended-towel.png";
import partialLockerroom from "../../../public/images/partial-lockerroom.png";
import partialFountain from "../../../public/images/partial-fountain.png";
import forbiddenLockerroom from "../../../public/images/forbidden-lockerroom.png";
import forbiddenFountain from "../../../public/images/forbidden-fountain.png";

const InfoCard = (): React.ReactElement => {
  return (
    <Container>
        <Item topic={"Máscara"} content={[{image: requiredMask, label: 'Obrigatório'}, {image: recommendedMask, label: 'Recomendado'}]}/>
        <Item topic={"Toalha"} content={[{image: requiredTowel, label: 'Obrigatório'}, {image: recommendedTowel, label: 'Recomendado'}]}/>
        <Item topic={"Bebedouro"} content={[{image: partialFountain, label: 'Parcial'}, {image: forbiddenFountain, label: 'Proibido'}]}/>
        <Item topic={"Vestiários"} content={[{image: requiredLockerroom, label: 'Liberado'}, {image: partialLockerroom, label: 'Parcial'},  {image: forbiddenLockerroom, label: 'Fechado'}]}/>
    </Container>
  );
}
  
  export default InfoCard;