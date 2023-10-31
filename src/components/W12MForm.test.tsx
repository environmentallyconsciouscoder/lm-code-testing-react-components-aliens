import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';
import userEvent from '@testing-library/user-event';

test('Given we submit, when the handler function is called, then we pass in the event parameters', async () => {
	const handleSubmit = jest.fn();

	render(<W12MForm />);

	const submitButton = screen.getAllByRole('button').find(b => b.textContent === 'Submit');

	if (submitButton) {
		await userEvent.click(submitButton);
	}

	submitButton?.addEventListener('click', () => {
		expect(handleSubmit).toHaveBeenCalledTimes(1);
	})

});
