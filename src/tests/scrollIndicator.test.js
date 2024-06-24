import React from 'react';
import { render, screen } from '@testing-library/react';
import ScrollIndicator from '../common/components/common/scrollIndicator';

describe('ScrollIndicator Component', () => {
  it('should render the scroll indicator', () => {
    render(<ScrollIndicator />);
    const scrollIndicator = screen.getByTestId('scroll-indicator');
    expect(scrollIndicator).toBeInTheDocument();
  });

  it('should render the scroll indicator with default direction (bottom)', () => {
    render(<ScrollIndicator />);
    const path = screen.getByTestId('scroll-indicator').querySelector('path');
    expect(path).toHaveAttribute('d', 'M12 16l-6-6h12z');
  });

  it('should render the scroll indicator with direction set to top', () => {
    render(<ScrollIndicator direction="top" />);
    const path = screen.getByTestId('scroll-indicator').querySelector('path');
    expect(path).toHaveAttribute('d', 'M12 8l6 6H6z');
  });

  it('should render the scroll indicator with default color (#fff)', () => {
    render(<ScrollIndicator />);
    const path = screen.getByTestId('scroll-indicator').querySelector('path');
    expect(path).toHaveAttribute('fill', '#fff');
  });

  it('should render the scroll indicator with a custom color', () => {
    const customColor = '#123456';
    render(<ScrollIndicator color={customColor} />);
    const path = screen.getByTestId('scroll-indicator').querySelector('path');
    expect(path).toHaveAttribute('fill', customColor);
  });

  it('should render the scroll indicator with default color when color is set to null', () => {
    render(<ScrollIndicator color={null} />);
    const path = screen.getByTestId('scroll-indicator').querySelector('path');
    expect(path).toHaveAttribute('fill', '#fff');
  });
});
