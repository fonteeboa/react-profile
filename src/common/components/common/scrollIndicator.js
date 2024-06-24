import React from 'react';
const ScrollIndicator = ({direction = 'bottom', color = '#fff'}) => {
  const colorAux = color ? color : '#fff';
  return (
    <div className="scroll-indicator" data-testid="scroll-indicator">
      <svg width="40" height="40" viewBox="0 0 24 24">
        <path fill={colorAux} d={direction === 'bottom' ? "M12 16l-6-6h12z" :"M12 8l6 6H6z"} />
      </svg>
    </div>
  )
}

export default ScrollIndicator;
