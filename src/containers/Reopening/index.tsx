import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import SearchLocations from "../SearchLocations";
import Footer from "../../components/Footer";

const Reopening = (): React.ReactElement => {
  return (
    <div>
      <Header />
      <Title title={"Reabertura Smart Fit"} subtitle={"O horario de funcionamento das nossas unidades esta "+ 
      "seguindo o decreto de cada municipio. Por isso, confira aqui se a sua unidade está aberta e as medidas " +
      "de segurança que estamos seguindo."}/>
      <SearchLocations />
      <Footer />
    </div>
  );
};

export default Reopening;
