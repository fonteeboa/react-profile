import React, { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Projects from './../pages/projects';
import axios from 'axios';

const reposData = [
    { id: 1, name: 'repo1', full_name: 'fonteeboa/repo1', description: 'Descrição do repo1' },
    { id: 2, name: 'repo2', full_name: 'fonteeboa/repo2', description: 'Descrição do repo2' },
];

jest.mock('axios');
jest.mock('antd', () => {
    const originalModule = jest.requireActual('antd');
    return {
        ...originalModule,
        Carousel: ({ children, autoplay, arrows, ...props }) => (
            <div data-autoplay={autoplay} data-arrows={arrows} {...props}>{children}</div>
        ),
    };
});

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

describe('Projects Component erros', () => {
    it('should display an alert when there is an error fetching the repos', async () => {
        axios.get.mockRejectedValueOnce(new Error('Erro ao buscar dados do GitHub'));

        render(<Projects />);

        await waitFor(() => {
            const alert = screen.getByTestId('projects-alert');
            expect(alert).toBeInTheDocument();
            expect(alert).toHaveTextContent('Não foi possível buscar informações da API do GitHub.');
        });
    });
});

describe('Projects Component', () => {
    beforeEach(async () => {
        axios.get.mockResolvedValue({ data: reposData });
        await act(async () => {
            render(<Projects />);
        });
    });

    it('should render the main container', async () => {
        const container = screen.getByTestId('projects-container');
        expect(container).toBeInTheDocument();

    });

    it('should render the title', async () => {
        const title = screen.getByTestId('projects-title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Projetos GitHub');
    });

    it('should display the carousel when repos are fetched successfully', async () => {
        const carousel = screen.getByTestId('projects-carousel');
        expect(carousel).toBeInTheDocument();
        expect(screen.getByText('fonteeboa/repo1')).toBeInTheDocument();
        expect(screen.getByText('Descrição do repo1')).toBeInTheDocument();
        expect(screen.getByText('fonteeboa/repo2')).toBeInTheDocument();
        expect(screen.getByText('Descrição do repo2')).toBeInTheDocument();
    });
});
