import { ChangeEvent, FormEvent, useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';

interface Selector {
	selectedOption: string
}

const W12MForm = () => {


	const [ numberOfBeings, setNumberOfBeings] = useState<string>("");
	const [ planetsName, setPlanetsName] = useState<string>("");
	const [ speciesName, setSpeciesName] = useState<string>("");
	const [ selectedValue, setSelectedValue] = useState<Selector>({
		selectedOption: "4"
	});
	const [ textArea, setTextArea] = useState<string>("");

	function handleSelectedChange(event: ChangeEvent<HTMLSelectElement>): void {
		setSelectedValue({selectedOption: event.target.value});
	}

	function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
		setTextArea(event.target.value);
	}

	function handleSubmit(event: FormEvent): void {
		event.preventDefault();
		// console.log("numberOfBeings", numberOfBeings);
		// console.log("planetsName", planetsName);
		// console.log("speciesName", speciesName);
		// console.log("selectedValue", selectedValue.selectedOption);
		// console.log("textArea", textArea);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Species Name</label>
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
			<label>Planet Name</label>
			<PlanetName planetName={planetsName} onChangePlanetName={(value) => setPlanetsName(value)} />
			<label>Number of beings</label>
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} />
			<label>What is 2 + 2</label>
			<select value={selectedValue.selectedOption} onChange={handleSelectedChange}>
				<option value="4">4</option>
				<option value="Not 4">Not 4</option>
			</select>
			<label>Reason for sparing</label>
			<textarea value={textArea} onChange={handleTextAreaChange}></textarea>
			<button type="submit">Submit</button>
		</form>
	);
};

export default W12MForm;
