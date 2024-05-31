import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const TaskList = ({ tasks, droppableId, title }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div className="task-list" ref={provided.innerRef} {...provided.droppableProps}>
          <h2>{title}</h2>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
