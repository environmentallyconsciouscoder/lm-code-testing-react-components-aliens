const validateSelectFour : (value : string) => string[] = (value) => {
    const errorMessages = [];

    console.log("value", typeof value)
    const isSelectorShowingFour = value.match(/^4$/);
    console.log("isSelectorShowingFour", isSelectorShowingFour)

    if (!isSelectorShowingFour) {
        errorMessages.push('must show 4')
    }

    return errorMessages
};

export default validateSelectFour;
