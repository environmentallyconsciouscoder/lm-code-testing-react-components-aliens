const validatePlanetName : (planetName : string) => string[] = (planetName) => {
    const errorMessages = [];

    const isPlanetNameBetween2And49 = planetName.match(/^(?:[\w0-9!@#$%^&*()\s]){2,49}$/);
    const planetNameHasNoSpecialCharacters = planetName.match(/^[a-zA-Z\d]*$/);

    if (!isPlanetNameBetween2And49) {
        errorMessages.push('Must be between 2 and 49 characters.')
    }

    if (!planetNameHasNoSpecialCharacters) {
        errorMessages.push('No special characters allowed!')
    }

    return errorMessages
};

export default validatePlanetName;
