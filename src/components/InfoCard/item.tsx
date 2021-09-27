import React from "react";
import {Topic, Content, ImageLabel, StyledImage, Label, ItemContainer} from "./style";

const InfoCard = (props: {topic: string, content: Array<{image: StaticImageData, label: string}>}): React.ReactElement => {
  return (
    <ItemContainer>
        <Topic>{props.topic}</Topic>
        <Content>
            {props.content.map(( x: {image: StaticImageData, label: string}) => (
                <ImageLabel>
                    <StyledImage src={x.image} alt={x.label} />
                    <Label>{x.label}</Label>
                </ImageLabel>
            ))}
        </Content>
    </ItemContainer>
  );
}
  
  export default InfoCard;