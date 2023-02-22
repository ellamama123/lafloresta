import { primaryFill, secondaryFill } from './constants';
import { IconProps } from './types';

const Search: React.FC<IconProps> = ({ mode = 'primary' }) => {
  const fillColor = mode === 'primary' ? primaryFill : secondaryFill;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.80558 15.1944 2 10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19Z"
        stroke={fillColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22.0001L16.65 16.65"
        stroke={fillColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Search };
