import React from 'react';
import { useDrag } from 'react-dnd';

export default function MovableItem({ name, setItems }) {
  const changeItemColumn = (currentItem, columnName) => {
    setItems((prevState) => {
      return prevState.map(e => {
        return {
          ...e,
          column: e.name === currentItem.name ? columnName : e.column,
        }
      })
    });
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      changeItemColumn(item, dropResult.name);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} class="card" style={{ opacity, maxHeight: '300px', margin: '10px' }}>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">card's content.</p>
      </div>
    </div>

    // <div ref={drag} className='movable-item' style={{ opacity }}>
    //   {name}
    // </div>
  );
};