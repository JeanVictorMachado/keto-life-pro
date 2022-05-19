import { useMemo } from "react";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { LogoKetoPro } from "../../components/LogoKetoPro";

import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { BiFace } from "react-icons/bi";

import "./styles.css";
import { GreenCircle } from "../../components/GreenCircle";
import { SubmitButton } from "../../components/SubmitButton";
import { ChartMyWeightSVG } from "../../components/ChartMyWeightSVG";
import { BodyChangeSVG } from "../../components/BodyChangeSVG";
import { CardChartMyWeight } from "../../components/CardChartMyWeight";
import { CardBodyChange } from "../../components/CardBodyChange";

export const Results = () => {
  const gender = useMemo(() => {
    return localStorage.getItem("@ketopro__gender:");
  }, []);

  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <div className="results__comtainer">
          <div className="results__header-container">
            <div className="results__logo-container">
              <LogoKetoPro />
            </div>

            <div className="results__green-circle-container">
              <GreenCircle
                svg={
                  gender === "male" ? (
                    <BiFace size={45} color="#606060" />
                  ) : (
                    <MdOutlineFaceRetouchingNatural size={45} color="#606060" />
                  )
                }
              />
            </div>
          </div>

          <div className="results__title-container">
            <p className="results__title">Keto Pro</p>

            <p className="results__title">O método que está</p>

            <p className="results__title">revolucionando o Mundo.</p>
          </div>

          <div className="results__content">
            <SubmitButton text="Assistir aula grátis!" />
          </div>

          <div className="results__result-resume-container">
            <p className="results__result-resume-text">SEUS RESULTADOS</p>

            <div className="results__personal-informations-container">
              <div className="results__personal-informations">
                <span>32</span>
                <p>Idade</p>
              </div>

              <div className="results__personal-informations">
                <span>170</span>
                <p>Altura (CM)</p>
              </div>

              <div className="results__personal-informations">
                <span>80</span>
                <p>Peso (Kg)</p>
              </div>
            </div>
          </div>

          <div className="results__metrics-container">
            <div className="results__metrics-card-container">
              <CardChartMyWeight
                bodyWeight="74Kg"
                currentWeight="82Kg"
                desiredWeigh="74Kg"
              />
            </div>

            <div className="results__metrics-card-container">
              <CardBodyChange />
            </div>

            <div className="results__metrics-card-container">
              <h2>Meu Peso</h2>
              <div className="results__metrics-my-weight-msg">
                <p>Peso alcançável ao final das primeiras 4 semanas</p>
              </div>
              <span>74,8Kg</span>
              <div>
                <ChartMyWeightSVG />
              </div>
            </div>
          </div>

          <div className="results__final-submit-button">
            <SubmitButton text="Assistir aula grátis!" />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};
