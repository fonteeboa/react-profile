import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ProgressBar from '../common/components/loading/coffe/progressBar';

let originalError;
// Simula window.matchMedia
beforeAll(() => {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            addListener: () => { },
            removeListener: () => { },
        };
    };
    originalError = console.error;
    console.error = jest.fn();
});

afterAll(() => {
    console.error = originalError;
});


describe('ProgressBar Component', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    render(<ProgressBar />);
  });

  it('should render the progress container', () => {
    const progressContainer = screen.getByTestId('progress-container');
    expect(progressContainer).toBeInTheDocument();
  });

  it('should render the custom progress bar', () => {
    const customProgressBar = screen.getByTestId('custom-progress-bar');
    expect(customProgressBar).toBeInTheDocument();
  });

  it('should render the steps', () => {
    const steps = screen.getByTestId('steps');
    expect(steps).toBeInTheDocument();
  });

  it('should render the correct initial step description', () => {
    const stepsContent = screen.getByTestId('steps-content');
    expect(stepsContent).toHaveTextContent('Desfrute do aroma fresco dos grãos sendo moídos para obter o melhor sabor.');
  });

  it('should advance to the next step after the timer', () => {
    act(() => {
      jest.advanceTimersByTime(700);
    });
    const stepsContent = screen.getByTestId('steps-content');
    expect(stepsContent).toHaveTextContent('Aquecendo a água até a temperatura perfeita para liberar os sabores do café.');
  });

});
