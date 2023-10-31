import React from "react";
import ErrorMessage from "./ErrorMessage";

interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
  validate: (value: string) => Array<string>;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({speciesName, onChangeSpeciesName, validate}) => {

  console.log('speciesName', speciesName)
  const errorMessage = validate(speciesName);

  return (
    <>
    <input id='speciesName'
    data-testid="speciesName"
    type='text'
    value={speciesName}
    onChange={(e) => onChangeSpeciesName(e.target.value)} />
    { errorMessage.length !== 0 &&
      <ErrorMessage errorMessage={errorMessage}/>
    }
    </>
  );
};

export default SpeciesName;