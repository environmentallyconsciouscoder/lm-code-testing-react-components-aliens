import React from "react";

interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({speciesName, onChangeSpeciesName}) => {
  return (
    <input id='speciesName'
    type='text'
    value={speciesName}
    onChange={(e) => onChangeSpeciesName(e.target.value)} />
  );
};

export default SpeciesName;