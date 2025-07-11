'use Client';

import { Button } from './ui/button';

type CustomButtonProps = {
  text: string;
  variant: 'default' | 'outline';
  onClick?: () => void;
};

const CustomButton = ({
  text,
  variant = 'default',
  onClick,
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      className={`${
        variant === 'default'
          ? 'bg-[#FF9E00] text-white'
          : 'bg-white border border-[#FF9E00] text-[#7B7B7B]'
      } text-20px px-3.5 py-1`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
