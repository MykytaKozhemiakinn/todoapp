import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';



const ToDoItem = ({text, isCompleted, removeTask,completeTask, id}) => (
	<li className='todo-item'>
		<i onClick={()=> completeTask(id)}className={isCompleted? 'mark far fa-check-circle': 'mark far fa-circle'}/>
			<span className={isCompleted? 'completed text':'text'}>{text}</span>
		<i onClick={()=> removeTask(id)} className='fas fa-times'/>
		</li>
);

ToDoItem.propTypes ={
	text: PropTypes.string,
	isCompleted: PropTypes.bool,
	completeTask:PropTypes.func,
	removeTask: PropTypes.func,
	id: PropTypes.number,

}

ToDoItem.defaultTypes ={
	text:'',
	isCompleted: false,
	removeTask: () => {},
	completeTask: () => {},
	id:0,
}

export default ToDoItem;