import React from 'react';
import { render, screen } from '@testing-library/react';
import CoffeeLoading from '../common/components/loading/coffe/coffeeLoading';
import img from '../common/images/coffee.png';

describe('CoffeeLoading Component', () => {

  it('should render the coffee container', () => {
    render(<CoffeeLoading />);
    const coffeeContainer = screen.getByTestId('coffee-container');
    expect(coffeeContainer).toBeInTheDocument();
  });

  it('should render the coffee image with correct attributes', () => {
    render(<CoffeeLoading />);
    const coffeeImg = screen.getByTestId('coffee-img');
    expect(coffeeImg).toBeInTheDocument();
    expect(coffeeImg).toHaveAttribute('src', img);
    expect(coffeeImg).toHaveAttribute('alt', 'coffee');
    expect(coffeeImg).toHaveAttribute('width', '250px');
    expect(coffeeImg).toHaveAttribute('height', '250px');
  });

  it('should apply additional className if provided', () => {
    const className = 'additional-class';
    render(<CoffeeLoading className={className} />);
    const coffeeContainer = screen.getByTestId('coffee-container');
    expect(coffeeContainer).toHaveClass('coffeeContainer');
    expect(coffeeContainer).toHaveClass('additional-class');
  });

  it('should render with default className if no additional className is provided', () => {
    render(<CoffeeLoading />);
    const coffeeContainer = screen.getByTestId('coffee-container');
    expect(coffeeContainer).toHaveClass('coffeeContainer');
    expect(coffeeContainer).not.toHaveClass('additional-class');
  });
});
