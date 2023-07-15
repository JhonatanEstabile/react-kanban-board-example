import React from 'react';
import { useDrop } from 'react-dnd';

export default function Column({ children, className, title }) {
  const [, drop] = useDrop({
    accept: 'card',
    drop: () => ({ name: title }),
  });

  return (
    <div class="card" style={{ height: '100%' }}>
      <div class="card-header">
        {title}
      </div>
      <div ref={drop} class="card-body">
        {children}
      </div>
    </div>

    // <div ref={drop} className={className}>
    //   {title}
    //   {children}
    // </div>
  );
};
