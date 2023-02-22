import React from 'react';

import { ViewportDimensionProvider } from '../../contexts/ViewportDimensionContext';

interface ContextWrapperProps {
  children: React.ReactNode;
}

const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {
  return <ViewportDimensionProvider>{children}</ViewportDimensionProvider>;
};

export default ContextWrapper;
