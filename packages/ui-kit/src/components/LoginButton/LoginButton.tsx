import { HTMLProps, ReactNode } from 'react';

interface LoginButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  dataTestId?: string;
}

function LoginButton(props: LoginButtonProps) {
  return (
    <button
      data-testid={props.dataTestId}
      className="w-full h-10 rounded-none border-(1 solid black) bg-blue-600 hover:opacity-90 cursor-pointer text-sm font-600 gap-10 flex justify-center items-center md:(h-13)"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export default LoginButton;
