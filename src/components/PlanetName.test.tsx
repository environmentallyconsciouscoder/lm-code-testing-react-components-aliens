import { fireEvent, render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';
const mockOnChange = jest.fn();
const mockValidator = jest.fn();

test('Given the props, when the component is rendered, then the state should change', () => {

    render(<PlanetName planetName="" onChangePlanetName={mockOnChange} validate={mockValidator} />);

    const inputElement = screen.getByTestId("planetName");
    fireEvent.change(inputElement, { target: { value: "earth" } });

    expect(mockOnChange).toHaveBeenCalledWith("earth"); // Check if the function was called with the correct value
});

test('Given the props, when the component is rendered, then the screen would show text Must be between 2 and 49 characters, and No special characters allowed!', () => {

    mockValidator.mockReturnValue(["Must be between 2 and 49 characters", "No special characters allowed!"]);

    render(<PlanetName planetName="" onChangePlanetName={mockOnChange} validate={mockValidator} />);

    expect(screen.getByText("Must be between 2 and 49 characters")).toBeInTheDocument();
    expect(screen.getByText("No special characters allowed!")).toBeInTheDocument();
})
