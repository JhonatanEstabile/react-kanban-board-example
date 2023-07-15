import React, { useState } from 'react';
// import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Column from './components/Column';
import MovableItem from './components/MoveAbleItem';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'item-1', column: 'Primeira coluna' },
    { id: 2, name: 'item-2', column: 'Segunda coluna' },
    { id: 3, name: 'item-3', column: 'Primeira coluna' },
  ]);

  const returnItemsForColumn = (columnName) => {
    return items
      .filter((item) => item.column === columnName)
      .map(item => (
        <MovableItem key={item.id} name={item.name} setItems={setItems}/>
      ));
  };

  return (
    <div className="container container-height-100">
      <DndProvider backend={HTML5Backend}>
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