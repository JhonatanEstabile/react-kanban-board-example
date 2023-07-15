import React, { useState } from 'react';
// import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import Column from './components/Column';
import MovableItem from './components/MoveAbleItem';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'item-1', column: 'Primeira coluna' },
    { id: 2, name: 'item-2', column: 'Segunda coluna' },
    { id: 3, name: 'item-3', column: 'Primeira coluna' },
  ]);

  const isMobile = window.innerWidth < 600;

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems(prevState => {
        const copiedStateArray = [...prevState];

        // remove item by hoverIndex and put dragItem instead
        const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by dragIdenx and put prevItem instead
        copiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return copiedStateArray;
      });
    }
  }

  const returnItemsForColumn = (columnName) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item, index) => (
        <MovableItem
          key={item.id}
          name={item.name}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ));
  };

  return (
    <div className="container container-height-100">
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <div className='row container-height-100' style={{ padding: '25px' }}>
            <div className="col">
              <Column title='Primeira coluna' className='column fist-column'>
                {returnItemsForColumn('Primeira coluna')}
              </Column>
            </div>

            <div className="col">
              <Column title='Segunda coluna' className='column second-column'>
                {returnItemsForColumn('Segunda coluna')}
              </Column>
            </div>
            <div className="col">
              <Column title='Terceira coluna' className='column first-column'>
                {returnItemsForColumn('Terceira coluna')}
              </Column>
            </div>
        </div>
      </DndProvider>
    </div>
  );
}