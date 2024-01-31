import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uniqueId from 'lodash/uniqueId';
import styles from './App.module.css';

const FormBuilder = () => {
    const initialToolboxItems = [
        { id: uniqueId('text-'), content: 'Text Input', type: 'text' },
        { id: uniqueId('checkbox-'), content: 'Checkbox', type: 'checkbox' }
    ];

    const [toolboxItems, setToolboxItems] = useState(initialToolboxItems);
    const [formItems, setFormItems] = useState([]);

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        if (source.droppableId === 'toolbox' && destination.droppableId === 'formPreview') {
            const itemToAdd = toolboxItems[source.index];
            const newFormItems = [...formItems, { ...itemToAdd, id: uniqueId(itemToAdd.type + '-') }];
            setFormItems(newFormItems);
        } else if (source.droppableId === 'formPreview' && destination.droppableId === 'formPreview') {
            const newFormItems = Array.from(formItems);
            const [relocatedItem] = newFormItems.splice(source.index, 1);
            newFormItems.splice(destination.index, 0, relocatedItem);
            setFormItems(newFormItems);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="toolbox" isDropDisabled={true}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={styles.droppableArea}>
                        <h2>Toolbox</h2>
                        {toolboxItems.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="formPreview">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={styles.droppableArea}>
                        <h2>Form Preview</h2>
                        {formItems.map((item, index) => (
                            <div key={item.id}>
                                {item.content}
                            </div>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default FormBuilder;
