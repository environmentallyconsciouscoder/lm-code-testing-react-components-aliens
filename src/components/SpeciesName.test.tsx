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


test('Given the props, when the component is rendered, then the screen would show text Must be between 3 and 23 characters, and No numbers or special characters allowed!', () => {
    const mockOnChange = jest.fn();
    const mockValidator = jest.fn();

    mockValidator.mockReturnValue(["Must be between 3 and 23 characters", "No numbers or special characters allowed!"]);

    render(<SpeciesName speciesName="" onChangeSpeciesName={mockOnChange} validate={mockValidator} />);

    expect(screen.getByText("Must be between 3 and 23 characters")).toBeInTheDocument();
    expect(screen.getByText("No numbers or special characters allowed!")).toBeInTheDocument();
})

