import React from "react";
import ErrorMessage from "./ErrorMessage";

type Props = {
    planetName: string;
    onChangePlanetName: (value: string) => void;
    validate: (value: string) => Array<string>;
  };

const PlanetName: React.FC<Props> = ({planetName, onChangePlanetName, validate}: Props) => {

  const errorMessage = validate(planetName);
  const isErrorMessageDefined = validate(planetName) !== undefined ? errorMessage : [];

  return (
    <>
    <input
      id='planetName'
      data-testid="planetName"
      type='text'
      value={planetName}
      onChange={(e) => onChangePlanetName(e.target.value)}
    />
    { isErrorMessageDefined.length !== 0 &&
      <ErrorMessage errorMessage={isErrorMessageDefined}/>
    }
    </>
  );
};

export default PlanetName;
