import React from 'react';
import { useDrop } from 'react-dnd';

export default function Column({ children, className, title }) {
  const [, drop] = useDrop({
    accept: 'card',
    drop: () => ({ name: title }),
  });

  return (
    <div className="card" style={{ height: '100%' }}>
      <div className="card-header">
        {title}
      </div>
      <div ref={drop} className="card-body">
        {children}
      </div>
    </div>
  );
};
