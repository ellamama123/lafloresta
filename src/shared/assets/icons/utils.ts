import { IconSize } from './types';

export const getIconWidth = (size: IconSize) => {
  switch (size) {
    case 'small':
      return {
        width: 20,
      };
    case 'medium':
      return {
        width: 30,
      };
    case 'large':
      return {
        width: 50,
      };
  }
};
