import { fireEvent, render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';

test('Given the props, when the component is rendered, then the state should change', () => {
    const mockOnChange = jest.fn();
    render(<PlanetName planetName="" onChangePlanetName={mockOnChange} />);

    const inputElement = screen.getByTestId("planetName");
    fireEvent.change(inputElement, { target: { value: "earth" } });

    expect(mockOnChange).toHaveBeenCalledWith("earth"); // Check if the function was called with the correct value
});
