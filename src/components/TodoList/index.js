import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction } from '../../redux/action';
import Todo from '../Todo';
import { v4 as uuidv4 } from 'uuid';
import { todoListSelector,todosRemainingSelector } from '../../redux/selector';
import todoListSliceReducer from './todoListSliceReducer';

export default function TodoList() {
  const todoList = useSelector(todosRemainingSelector)
  const [nameTodo,setNameTodo] = useState('')
  const [prioriry,setPrioriry] = useState('Medium')

  const dispath = useDispatch()

  const handleAddClickButton=() => {
    dispath(todoListSliceReducer.actions.addTodo({
      id: uuidv4(),
      name: nameTodo,
      prioriry: prioriry,
      completed: false
    }))
    setNameTodo('')
    setPrioriry('Medium')

  }
  const handleChangeTodo =(e) => {
    setNameTodo(e.target.value)
  }
  const handlePrioriryChange= (e) => {
    setPrioriry(e)
  } 
  
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
    
        {todoList.map(todo =>
          <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry}  completed={todo.completed}/>
          )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={nameTodo} onChange={handleChangeTodo} />
          <Select value={prioriry} onChange={handlePrioriryChange} defaultValue="Medium">
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddClickButton} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
