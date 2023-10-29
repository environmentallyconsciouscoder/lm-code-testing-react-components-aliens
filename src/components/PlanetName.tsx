import React from "react";

type Props = {
    planetName: string;
    onChangePlanetName: (value: string) => void;
  };

const PlanetName: React.FC<Props> = ({planetName, onChangePlanetName}: Props) => {
  return (
    <input
      id='planetName'
      data-testid="planetName"
      type='text'
      value={planetName}
      onChange={(e) => onChangePlanetName(e.target.value)}
    />
  );
};

export default PlanetName;
