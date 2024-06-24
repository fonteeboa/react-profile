import React from 'react';
import { render, screen } from '@testing-library/react';
import Jobs from '../pages/jobs';

const workExperiences = [
    {
        position: 'Tech Lead',
        company: 'Blockbit',
        period: 'Feb 2023 - Present',
        responsibilities: 'Liderança técnica e desenvolvimento de soluções de segurança.',
        logo: 'https://www.blockbit.com/wp-content/uploads/2024/03/cropped-ico-bb-32x32.png',
        link: 'https://www.blockbit.com',
    },
    {
        position: 'Developer',
        company: 'Blockbit',
        period: 'Jun 2022 - Mar 2023',
        responsibilities: 'Desenvolvimento de sistemas de segurança.',
        logo: 'https://www.blockbit.com/wp-content/uploads/2024/03/cropped-ico-bb-32x32.png',
        link: 'https://www.blockbit.com',
    },
    {
        position: 'PHP Developer',
        company: 'DBC Company',
        period: 'Nov 2021 - Jun 2022',
        responsibilities: 'Desenvolvimento de aplicações PHP.',
        logo: 'https://media.licdn.com/dms/image/C4D0BAQFszK2MGQUCUA/company-logo_100_100/0/1668687291660?e=1726704000&v=beta&t=KdVg71016l7bg3jqdgvAVsSq4nnZmQzAEfMX0sMOZL8',
        link: 'https://www.dbccompany.com.br',
    },
    {
        position: 'Full Stack Developer',
        company: 'Teknisa',
        period: 'Apr 2019 - Nov 2021',
        responsibilities: 'Desenvolvimento full stack.',
        logo: 'https://media.licdn.com/dms/image/C560BAQFgwOw-EcXUig/company-logo_100_100/0/1630580201884/teknisaoficial_logo?e=1726704000&v=beta&t=lJuoaJMldX1FAVk8v5slvc7pGk_KgodDoohU5A8hKBI',
        link: 'https://www.teknisa.com',
    },
    {
        position: 'Estagiário de TI',
        company: 'GASMIG',
        period: 'Jun 2018 - Nov 2018',
        responsibilities: 'Suporte e manutenção de sistemas.',
        logo: 'https://media.licdn.com/dms/image/D4D0BAQEGFXwcuQYM9Q/company-logo_100_100/0/1716982652624/gasmig_logo?e=1726704000&v=beta&t=OPWYzjxDVuJIzwNfC_ObdgUdVCEhpo6BousSvrItTUE',
        link: 'https://www.gasmig.com.br',
    },
    {
        position: 'Estagiário de TI',
        company: 'Prefeitura Municipal de Betim',
        period: 'Mar 2015 - Feb 2017',
        responsibilities: 'Desenvolvimento e manutenção de sistemas.',
        logo: 'https://media.licdn.com/dms/image/D4D0BAQG5GDRpXyN9ZA/company-logo_100_100/0/1717425350749/prefeiturabetim_logo?e=1726704000&v=beta&t=XY4ujPNih2p0L75dADnwhAF9DGez2Za_5DteghDI6RU',
        link: 'https://www.betim.mg.gov.br',
    },
];


describe('Jobs Component', () => {
    it('should render the jobs container', () => {
        render(<Jobs />);
        const container = screen.getByTestId('jobs-container');
        expect(container).toBeInTheDocument();
    });

    it('should render the jobs timeline', () => {
        render(<Jobs />);
        const timeline = screen.getByTestId('jobs-timeline');
        expect(timeline).toBeInTheDocument();
    });

    it('should render the correct number of timeline items', () => {
        render(<Jobs />);
        const timelineItems = screen.getAllByRole('listitem');
        expect(timelineItems.length).toBe(6);
    });

    it('should render the period for each job experience', () => {
        render(<Jobs />);
        workExperiences.forEach((experience) => {
            const periodElement = screen.getByText(experience.period);
            expect(periodElement).toBeInTheDocument();
        });
    });

    it('should render the company logos with correct alt text', () => {
        render(<Jobs />);
        workExperiences.forEach((experience) => {
            const logos = screen.getAllByAltText(experience.company);
            logos.forEach((logo) => {
                expect(logo).toBeInTheDocument();
                expect(logo).toHaveAttribute('src', experience.logo);
            });
        });
    });

    it('should render the job titles with links', () => {
        render(<Jobs />);
        workExperiences.forEach((experience) => {
            const link = screen.getByText(`${experience.company} - ${experience.position}`);
            expect(link).toBeInTheDocument();
            expect(link.closest('a')).toHaveAttribute('href', experience.link);
        });
    });

    it('should render the company overview image', () => {
        render(<Jobs />);
        const companyImage = screen.getByTestId('jobs-img');
        expect(companyImage).toBeInTheDocument();
        expect(companyImage).toHaveAttribute('src', 'gpt-dev-terroso.jpg');
        expect(companyImage).toHaveAttribute('alt', 'Company Overview');
    });
});
