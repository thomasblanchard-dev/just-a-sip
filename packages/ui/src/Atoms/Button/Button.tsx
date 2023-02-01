import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps extends PropsWithChildren {}

export function Button({ children }: ButtonProps) {
  return (
    <a
      href="#"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </a>
  );
}

export default Button;
