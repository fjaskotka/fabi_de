import React from 'react'

const Button = ({label, url}) => {
    const handleClick = () => {
        window.open(url, '_blank');
      };

  return (
    <button
    onClick={handleClick}
    className="bg-primary text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#A5C572] duration-200">
    {label}
  </button>
  )
}

export default Button