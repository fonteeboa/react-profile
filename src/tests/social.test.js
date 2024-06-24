import React from 'react';
import { render, screen } from '@testing-library/react';
import Social from './../pages/social';
import { FloatButton } from 'antd';
import { GithubOutlined, LinkedinOutlined, PaperClipOutlined } from '@ant-design/icons';

jest.mock('antd', () => {
  const originalModule = jest.requireActual('antd');
  const React = require('react');
  return {
    ...originalModule,
    FloatButton: Object.assign((props) => <button {...props} />, {
      Group: (props) => <div {...props} />,
    }),
  };
});

jest.mock('@ant-design/icons', () => ({
  GithubOutlined: () => <svg data-testid="github-icon" />,
  LinkedinOutlined: () => <svg data-testid="linkedin-icon" />,
  PaperClipOutlined: () => <svg data-testid="paperclip-icon" />,
}));

describe('Social Component', () => {
  beforeEach(() => {
    render(<Social />);
  });

  it('should render the social container', () => {
    const container = screen.getByTestId('social-container');
    expect(container).toBeInTheDocument();
  });

  it('should render the FloatButton Group with trigger hover', () => {
    const group = screen.getByTestId('float-button-group');
    expect(group).toBeInTheDocument();
  });

  it('should render the Github FloatButton with correct attributes', () => {
    const githubButton = screen.getByTestId('github-button');
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute('href', 'https://github.com/fonteeboa');
    expect(githubButton).toHaveAttribute('target', '_blank');
    expect(githubButton).toHaveAttribute('type', 'primary');
    expect(githubButton).toHaveAttribute('shape', 'circle');
    expect(githubButton).toHaveClass('social-button github');
  });

  it('should render the Linkedin FloatButton with correct attributes', () => {
    const linkedinButton = screen.getByTestId('linkedin-button');
    expect(linkedinButton).toBeInTheDocument();
    expect(linkedinButton).toHaveAttribute('href', 'https://www.linkedin.com/in/galvao845/?locale=en_US');
    expect(linkedinButton).toHaveAttribute('target', '_blank');
    expect(linkedinButton).toHaveAttribute('type', 'primary');
    expect(linkedinButton).toHaveAttribute('shape', 'circle');
    expect(linkedinButton).toHaveClass('social-button linkedin');
  });
});