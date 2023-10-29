import { fireEvent, render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

test('Given the props, when the component is rendered, then the state should change', () => {
    const mockOnChangeNumberOfBeings = jest.fn();
    render(<NumberOfBeings numberOfBeings="" onChangeNumberOfBeings={mockOnChangeNumberOfBeings} />);

    const inputElement = screen.getByTestId("numberOfBeings");
    fireEvent.change(inputElement, { target: { value: "40000000" } });

    expect(mockOnChangeNumberOfBeings).toHaveBeenCalledWith("40000000"); // Check if the function was called with the correct value
});
