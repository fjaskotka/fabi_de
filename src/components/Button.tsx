import React from 'react';

interface ButtonProps {
  label: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ label, url }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevents any default behavior
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#A5C572] duration-200"
    >
      {label}
    </button>
  );
};

export default Button;
