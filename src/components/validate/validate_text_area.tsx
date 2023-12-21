// validate_species_name.ts
const validateTextArea : (textArea : string) => string[] = (textArea) => {
    const errorMessages = [];

    const isTextAreaBetwee17And153 = textArea.match(/^(?:[\w0-9!@#$%^&*()\s]){17,153}$/);

    if (!isTextAreaBetwee17And153) {
        errorMessages.push('Must be between 17 and 153 characters.')
    }

    return errorMessages
};

export default validateTextArea;