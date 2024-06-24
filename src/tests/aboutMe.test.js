import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '../pages/aboutMe';

beforeAll(() => {
  window.matchMedia = window.matchMedia || function () {
      return {
          matches: false,
          addListener: () => { },
          removeListener: () => { },
      };
  };
});

describe('AboutMe Component', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  it('should render the main container', () => {
    const container = screen.getByTestId('about-me-container');
    expect(container).toBeInTheDocument();
  });

  it('should render the profile image', () => {
    const profileImage = screen.getByTestId('about-me-img');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', 'profilePicture.jpg');
    expect(profileImage).toHaveAttribute('alt', 'Profile');
  });

  it('should render the title', () => {
    const title = screen.getByText('About Me');
    expect(title).toBeInTheDocument();
  });

  it('should render the first paragraph with correct content', () => {
    const paragraph1 = screen.getByTestId('about-me-paragraph-1');
    expect(paragraph1).toBeInTheDocument();
  });

  it('should render the second paragraph with correct content', () => {
    const paragraph2 = screen.getByTestId('about-me-paragraph-2');
    expect(paragraph2).toBeInTheDocument();
  });

  it('should render the paragraphs with the correct classes', () => {
    const paragraph1 = screen.getByTestId('about-me-paragraph-1');
    const paragraph2 = screen.getByTestId('about-me-paragraph-2');
    expect(paragraph1).toHaveClass('about-me-paragraph');
    expect(paragraph2).toHaveClass('about-me-paragraph');
  });

  it('should render the image with the correct classes', () => {
    const profileImage = screen.getByTestId('about-me-img');
    expect(profileImage).toHaveClass('about-me-image');
    expect(profileImage).toHaveClass('zoomImg');
  });
});
