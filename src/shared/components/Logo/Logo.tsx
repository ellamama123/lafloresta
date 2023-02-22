import React from 'react';

import assets from '../../assets';

interface LogoProps {
  mode?: 'primary' | 'secondary';
}

const Logo: React.FC<LogoProps> = ({}) => {
  return <assets.LogoIcon />;
};

export default Logo;
