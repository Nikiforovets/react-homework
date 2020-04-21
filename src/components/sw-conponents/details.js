import React from "react";
import ItemDetails from "../item-details";
import { withService } from "../../hocs";
import { Record } from "../app/app";
//import Record from "../spinner";
import { SwapiServiceConsumer } from "../../cotext";

const personDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record label="Name" field="name" />
      <Record label="Gender" field="gender" />
      <Record label="Birth year" field="birthYear" />
      <Record label="Eye Color" field="eyeColor" />
    </ItemDetails>
  );
};

const PersonDetails = withService(personDetails);

const planetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="name" label="Name"></Record>
    </ItemDetails>
  );
};

const PlanetDetails = withService(planetDetails);

const starshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model"></Record>
    </ItemDetails>
  );
};

const StarshipDetails = withService(starshipDetails);

export { PersonDetails, PlanetDetails, StarshipDetails };
