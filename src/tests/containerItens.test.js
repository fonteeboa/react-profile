import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerItens from '../pages/containerItens';
import Profile from '../pages/profile';
import Social from '../pages/social';
import AboutMe from '../pages/aboutMe';
import Jobs from '../pages/jobs';
import Projects from '../pages/projects';

jest.mock('../pages/profile', () => () => <div data-testid="profile-component" />);
jest.mock('../pages/social', () => () => <div data-testid="social-component" />);
jest.mock('../pages/aboutMe', () => () => <div data-testid="aboutme-component" />);
jest.mock('../pages/jobs', () => () => <div data-testid="jobs-component" />);
jest.mock('../pages/projects', () => () => <div data-testid="projects-component" />);

describe('ContainerItens Component', () => {
  it('should render the master container', () => {
    render(<ContainerItens />);
    const container = screen.getByTestId('masterContiner');
    expect(container).toBeInTheDocument();
  });

  it('should render the Profile component', () => {
    render(<ContainerItens />);
    const profile = screen.getByTestId('profile-component');
    expect(profile).toBeInTheDocument();
  });

  it('should render the AboutMe component', () => {
    render(<ContainerItens />);
    const aboutMe = screen.getByTestId('aboutme-component');
    expect(aboutMe).toBeInTheDocument();
  });

  it('should render the Jobs component', () => {
    render(<ContainerItens />);
    const jobs = screen.getByTestId('jobs-component');
    expect(jobs).toBeInTheDocument();
  });

  it('should render the Projects component', () => {
    render(<ContainerItens />);
    const projects = screen.getByTestId('projects-component');
    expect(projects).toBeInTheDocument();
  });

  it('should render the Social component', () => {
    render(<ContainerItens />);
    const social = screen.getByTestId('social-component');
    expect(social).toBeInTheDocument();
  });
});
