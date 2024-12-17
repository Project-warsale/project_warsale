import React from "react";

const KlachtenProcedure: React.FC = () => {
  return (
    <div className="klachten-procedure">
      <h1>Klachtenprocedure</h1>
      <p>
        Mocht u toch een slechte ervaring hebben met onze service of producten,
        dan horen wij dit graag. U kunt uw klacht richten aan onze support
        afdeling via e-mail naar{" "}
        <a href="mailto:info@allprepare.com.com">info@allprepare.com.com</a> of
        via het contactformulier. U krijgt van ons binnen 14 dagen na ontvangst
        van uw klacht een inhoudelijke reactie.
      </p>
      <h2>Wat te doen als u niet tevreden bent?</h2>
      <p>
        Ben je niet tevreden met de afhandeling van jouw klacht? Dan kun je deze
        voorleggen aan de Geschillencommissie Thuiswinkel, Postbus 90600, 2509
        LP te Den Haag. Meer informatie kunt u vinden op de website van de
        Geschillencommissie:{" "}
        <a href="https://www.sgc.nl" target="_blank" rel="noopener noreferrer">
          www.sgc.nl
        </a>
        .
      </p>
      <p>
        Ook kunt u jouw klacht voorleggen aan de Geschillencommissie via het
        Europees ODR Platform:{" "}
        <a
          href="http://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer">
          http://ec.europa.eu/consumers/odr/
        </a>
        .
      </p>
    </div>
  );
};

export default KlachtenProcedure;
