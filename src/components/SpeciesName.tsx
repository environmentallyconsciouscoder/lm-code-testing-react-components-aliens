import React from "react";
import ErrorMessage from "./ErrorMessage";

interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
  validate: (value: string) => Array<string>;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({speciesName, onChangeSpeciesName, validate}) => {

  const errorMessage = validate(speciesName);
  const isErrorMessageDefined = validate(speciesName) !== undefined ? errorMessage : [];

  return (
    <>
    <input id='speciesName'
    data-testid="speciesName"
    type='text'
    value={speciesName}
    onChange={(e) => onChangeSpeciesName(e.target.value)} />
    { isErrorMessageDefined.length !== 0 &&
      <ErrorMessage errorMessage={isErrorMessageDefined}/>
    }
    </>
  );
};

export default SpeciesName;