import { fireEvent, render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('Given the props, when the component is rendered, then the state should change', () => {
    const mockOnChange = jest.fn();
    const mockValidator = jest.fn();
    render(<SpeciesName speciesName="" onChangeSpeciesName={mockOnChange} validate={mockValidator} />);

    const inputElement = screen.getByTestId("speciesName");
    fireEvent.change(inputElement, { target: { value: "human" } });

    expect(mockOnChange).toHaveBeenCalledWith("human"); // Check if the function was called with the correct value
});
