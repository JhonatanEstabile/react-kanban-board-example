import React from 'react';
import { useDrop } from 'react-dnd';

export default function Column({ children, className, title }) {
  const [, drop] = useDrop({
    accept: 'card',
    drop: () => ({ name: title }),
  });

  return (
    <div ref={drop} className={className}>
      {title}
      {children}
    </div>
  );
};
