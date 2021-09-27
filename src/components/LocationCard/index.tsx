import React from "react";
import {Location} from "../../ducks/location";
import { Container, Opened, Title, Content, Divisor, ContainerInformations, StyledImage, ContainerSchedule } from './style';

import requiredMask from "../../../public/images/required-mask.png";
import requiredTowel from "../../../public/images/required-towel.png";
import requiredLockerroom from "../../../public/images/required-lockerroom.png";
import recommendedMask from "../../../public/images/recommended-mask.png";
import recommendedTowel from "../../../public/images/recommended-towel.png";
import partialLockerroom from "../../../public/images/partial-lockerroom.png";
import partialFountain from "../../../public/images/partial-fountain.png";
import forbiddenLockerroom from "../../../public/images/forbidden-lockerroom.png";
import forbiddenFountain from "../../../public/images/forbidden-fountain.png";

const LocationCard = (props: {item: Location}): React.ReactElement => {
  const {item} = props;
  return (
      <Container>
          <Opened isOpened={item.opened}>{item.opened ? 'Aberto' : 'Fechado'}</Opened>
          <Title>{item.title}</Title>
          <Content dangerouslySetInnerHTML={{ __html: item.content }}/>
          {item.opened && <Divisor/>}
          {item.opened && <ContainerInformations>
              <StyledImage src={item.mask === 'required' ? requiredMask : recommendedMask} />
              <StyledImage src={item.towel === 'required' ? requiredTowel : recommendedTowel} />
              <StyledImage src={item.fountain === 'partial' ? partialFountain : forbiddenFountain}/>
              <StyledImage src={item.lockerRoom === 'allowed' ? requiredLockerroom : 
                item.lockerRoom === 'partial' ? partialLockerroom : forbiddenLockerroom}/>
          </ContainerInformations>}
          {item.opened && <ContainerSchedule>
            {item.schedules.map(schedule => (
                <div>
                    <Title>{schedule.weekdays}</Title>
                    <Content>{schedule.hour}</Content>
                </div>
            ))}
          </ContainerSchedule>}
      </Container>
  )
}
export default LocationCard;
