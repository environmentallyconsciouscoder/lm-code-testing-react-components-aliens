const validateNumberOfBeings : (numberOfBeings : string) => string[] = (numberOfBeings) => {
    const errorMessages = [];

    const isNumberOfBeingsAtLeastOneBillion = numberOfBeings.match(/^[1-9]\d{9,}$/);

    if (!isNumberOfBeingsAtLeastOneBillion) {
        errorMessages.push('Must be at least one billion')
    }

    return errorMessages
};

export default validateNumberOfBeings;
