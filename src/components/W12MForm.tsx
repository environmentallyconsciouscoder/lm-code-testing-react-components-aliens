import React, { ChangeEvent, FormEvent, useState } from 'react';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import validateSpeciesName from './validate/validate_species_name';
import validatePlanetName from './validate/validate_planet_name';
import validateNumberOfBeings from './validate/validate_number_of_beings';
import validateSelectFour from './validate/validate_select_four';
import ErrorMessage from './ErrorMessage';
import validateTextArea from './validate/validate_text_area';

interface Selector {
  selectedOption: string;
}

const W12MForm: React.FC = () => {
  const [numberOfBeings, setNumberOfBeings] = useState<string>("");
  const [planetsName, setPlanetsName] = useState<string>("");
  const [speciesName, setSpeciesName] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<Selector>({
    selectedOption: "4"
  });
  const [textArea, setTextArea] = useState<string>("");
  const [error, setError] = useState<string[]>([]);
  const [errorForTextArea, setErrorForTextArea] = useState<string[]>([]);

  const handleSelectedChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const errorMessage = validateSelectFour(event.target.value);
    setError(errorMessage ?? []);
    setSelectedValue({ selectedOption: event.target.value });
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setTextArea(event.target.value);
    const errorMessage = validateTextArea(event.target.value);
    setErrorForTextArea(errorMessage ?? []);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log("SUBMITTED");
    // Add logic for form submission if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Species Name</label>
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(value) => setSpeciesName(value)}
        validate={validateSpeciesName}
      />
      <label>Planet Name</label>
      <PlanetName
        planetName={planetsName}
        onChangePlanetName={(value) => setPlanetsName(value)}
        validate={validatePlanetName}
      />
      <label>Number of beings</label>
      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={(value) => setNumberOfBeings(value)}
        validate={validateNumberOfBeings}
      />
      <label>What is 2 + 2</label>
      <select value={selectedValue.selectedOption} onChange={handleSelectedChange}>
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
      {error.length !== 0 && <ErrorMessage errorMessage={error} />}
      <label>Reason for sparing</label>
      <textarea value={textArea} onChange={handleTextAreaChange}></textarea>
      {errorForTextArea.length !== 0 && <ErrorMessage errorMessage={errorForTextArea} />}
      <button type="submit">Submit</button>
    </form>
  );
};

export default W12MForm;
