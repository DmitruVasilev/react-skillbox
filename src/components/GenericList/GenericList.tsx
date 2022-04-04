import React from 'react';

import './genericList.css';

interface IItem {
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  className?: string;
  text: string;
  id: string;
  onClick?: (id: string) => void;
}

interface IGenericListProps {
  list: IItem[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({
        As = 'div',
        text,
        onClick = noop,
        className,
        id,
        href
      }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}
