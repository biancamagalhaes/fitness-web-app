import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import InfoCard from "../../components/InfoCard";
import { Container, ContainerTitle, LocationsContainer, StyledImage, Title,
    Question, ContainerOption, Options, Time, FooterQuestions,
    ClosedLocations, FindResults, Button, RadioButton, CheckBox, ContainerButtons } from "./style";
import LocationCard from "../../components/LocationCard";
import IconHour from "../../../public/images/icon-hour.png";
import colors from "../../util/colors";
import {fetchLocations, getLocations, Location, filter, clean} from "../../ducks/location";

const SearchLocations = (props: {fetchLocations: () => void, filteredLocations: Location[], clean: () => void, filter: (timeInit: number, timeEnd: number, closedLocations: boolean) => void, loading: boolean }): React.ReactElement => {
  
  useEffect(() => {
    props.fetchLocations();
  }, [props.fetchLocations]);

  const [radioSelected, setRadioSelected ] = useState(0);
  const [checkbox, setCheckbox ] = useState(false);

  const filterLocations = () => {
      if(radioSelected === 1){
        props.filter(6, 12, checkbox);
      } else if(radioSelected === 2){
        props.filter(12, 18, checkbox);
      } else if(radioSelected === 3){
        console.log('cliquei aqui', radioSelected);
        props.filter(18, 23, checkbox);
      }
  }

  const cleanFilter = () => {
    props.clean();
    setRadioSelected(0);
    setCheckbox(false);
}
  return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Container>
            <ContainerTitle>
                <StyledImage src={IconHour} width={40} height={40}/>
                <Title>Horário</Title>
            </ContainerTitle>
            <Question>Qual período quer treinar?</Question>
            <ContainerOption> 
                <div style={{display: "flex", flexDirection: 'row', alignItems: 'center'}}> 
                    <RadioButton 
                        type="radio"
                        name="radio"
                        value="manha"
                        checked={radioSelected === 1}
                        onChange={() => setRadioSelected(1)}
                    />
                    <Options>Manhã</Options>
                </div>
                <Time>06:00 ás 12:00</Time>
            </ContainerOption>
            <ContainerOption>  
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
                    <RadioButton 
                        type="radio"
                        name="radio"
                        value="tarde"
                        checked={radioSelected === 2}
                        onChange={() => setRadioSelected(2)}
                    />
                    <Options>Tarde</Options>
                </div>
                <Time>12:01 ás 18:00</Time>
            </ContainerOption>
            <ContainerOption>  
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
                    <RadioButton 
                        type="radio"
                        name="radio"
                        value="noite"
                        checked={radioSelected === 3}
                        onChange={() => setRadioSelected(3)}
                    />
                    <Options>Noite</Options>
                </div>
                <Time>18:01 ás 23:00</Time>
            </ContainerOption>
            <FooterQuestions>
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: '1.5vh', alignItems: 'center'}}> 
                    <CheckBox 
                        type="checkbox"
                        name="checkbox"
                        value="false"
                        checked={checkbox === true}
                        onChange={() => setCheckbox(!checkbox)}
                    />
                    <ClosedLocations>Exibir unidades fehadas</ClosedLocations>
                </div>
                <FindResults>Resultados Encontrados: {<b>{props.filteredLocations.length}</b>}</FindResults>
            </FooterQuestions>
            <ContainerButtons>
                <Button color={colors.yellow} onClick={() => filterLocations()}>
                    Encontrar Unidade 
                    {props.loading && <ReactLoading type='balls' color={'#00000'} height={50} width={50} />}
                </Button>
                <Button color={colors.white} onClick={() => cleanFilter()}>Limpar</Button>
            </ContainerButtons>
        </Container>
        <InfoCard/>
        <LocationsContainer>
            {props.filteredLocations.length > 0 ? props.filteredLocations.map((item) => (
                <LocationCard key={item.id} item={item}/>
            )) : <Title>Nenhuma unidade encontrada</Title>}
        </LocationsContainer>
    </div>
  );
};

export default connect(getLocations, (dispatch: any) => ({
    fetchLocations: () => dispatch(fetchLocations()),
    clean: () => dispatch(clean()),
    filter: (timeInit: number, timeEnd: number, closedLocations: boolean) => dispatch(filter(timeEnd, timeInit, closedLocations))
  }))(SearchLocations);
