import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import App from '../pages/app';
import ContainerItens from '../pages/containerItens';
import CoffeeLoading from '../common/components/loading/coffe/coffeeLoading';
import ProgressBar from '../common/components/loading/coffe/progressBar';

jest.mock('../pages/containerItens', () => () => <div data-testid="container-itens-component" />);
jest.mock('../common/components/loading/coffe/coffeeLoading', () => () => <div data-testid="coffee-loading-component" />);
jest.mock('../common/components/loading/coffe/progressBar', () => () => <div data-testid="progress-bar-component" />);

let originalError;
beforeAll(() => {
    originalError = console.error;
    console.error = jest.fn();
});

afterAll(() => {
    console.error = originalError;
});

describe('App Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        act(() => {
            render(<App />);
        });
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('should render the main content section', () => {
        const mainContent = screen.getByTestId('main-content');
        expect(mainContent).toBeInTheDocument();
    });

    it('should render the CoffeeLoading and ProgressBar components initially', () => {
        const coffeeLoading = screen.getByTestId('coffee-loading-component');
        const progressBar = screen.getByTestId('progress-bar-component');
        expect(coffeeLoading).toBeInTheDocument();
        expect(progressBar).toBeInTheDocument();
    });

    it('should render the ContainerItens component after loading', async () => {
        act(() => {
            jest.advanceTimersByTime(4300);
        });

        await waitFor(() => {
            const containerItens = screen.getByTestId('container-itens-component');
            expect(containerItens).toBeInTheDocument();
        });
    });

    it('should render the warning message section', () => {
        const warningMessage = screen.getByTestId('warning-message');
        expect(warningMessage).toBeInTheDocument();
    });
});
