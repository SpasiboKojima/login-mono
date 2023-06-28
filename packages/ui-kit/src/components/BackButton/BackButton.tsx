import { HTMLProps, ReactNode } from 'react';

interface BackButtonProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

function BackButton(props: BackButtonProps) {
  return (
    <div className="mt-12 text-sm c-white flex gap-4 cursor-pointer items-center group" onClick={props.onClick}>
      <div className="w-6 h-6 rounded-full bg-blue-7 relative group-hover:translate-x--5px transition-transform-300">
        <div className="w-0 h-0 absolute top-6px left-6px b-t-(6 solid transparent) b-r-(10 solid white) b-b-(6 solid transparent)"></div>
      </div>
      {props.children}
    </div>
  );
}
export default BackButton;
