import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../pages/profile';

beforeAll(() => {
  window.matchMedia = window.matchMedia || function () {
      return {
          matches: false,
          addListener: () => { },
          removeListener: () => { },
      };
  };
});

describe('Profile Component', () => {
  it('should render the main container', () => {
    render(<Profile />);
    const container = screen.getByTestId('profile-container-class');
    expect(container).toBeInTheDocument();
  });

  it('should render the breadcrumb', () => {
    render(<Profile />);
    const breadcrumb = screen.getByTestId('breadCrumb');
    expect(breadcrumb).toBeInTheDocument();
  });

  it('should render the first title', () => {
    render(<Profile />);
    const firstTitle = screen.getByTestId('profile-fisrt-title');
    expect(firstTitle).toBeInTheDocument();
    expect(firstTitle).toHaveTextContent('Bringing ideas to life with code!');
  });

  it('should render the profile image', () => {
    render(<Profile />);
    const profileImage = screen.getByTestId('profile-polygon-img').querySelector('img');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', 'avatar-coffe.png');
    expect(profileImage).toHaveAttribute('alt', 'avatar');
  });

  it('should render the greeting', () => {
    render(<Profile />);
    const greeting = screen.getByTestId('profile-hi');
    expect(greeting).toBeInTheDocument();
    expect(greeting).toHaveTextContent('Hi, I’m João. Nice to meet you.');
  });

  it('should render the profile description', () => {
    render(<Profile />);
    const description = screen.getByTestId('profile-desc');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('I’m a Full Stack Developer with a passion for tackling complex challenges, crafting innovative solutions, and always fueled by a cup of coffee.');
  });

  it('should render the ScrollIndicator', () => {
    render(<Profile />);
    const scrollIndicator = screen.getByTestId('scroll-indicator'); // Certifique-se de adicionar um data-testid no ScrollIndicator
    expect(scrollIndicator).toBeInTheDocument();
  });
});
