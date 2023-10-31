// validate_species_name.ts
const validateSpeciesName : (speciesName : string) => string[] = (speciesName) => {
    const errorMessages = [];

    const isSpeciesNameBetween3And23 = speciesName.match(/^(?:[\w0-9!@#$%^&*()\s]){3,23}$/);
    const speciesNameHasNoNumbersOrSpecialCharacters = speciesName.match(/^[a-zA-Z]+$/);

    if (!isSpeciesNameBetween3And23) {
        errorMessages.push('Must be between 3 and 23 characters.')
    }

    if (!speciesNameHasNoNumbersOrSpecialCharacters) {
        errorMessages.push('No numbers or special characters allowed!')
    }

    return errorMessages
};

export default validateSpeciesName;
