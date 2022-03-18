import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { priorityFilterAction, searchFilterAction, statusFilterAction } from '../../redux/action';
import { searchTextSelector } from '../../redux/selector';

const { Search } = Input;

export default function Filters() {
  const [searchText,setSearchText] = useState('')
  const dispath = useDispatch()
  const [status,setStatus] = useState('All')
  const [prioriry,setPriority] = useState([])

  const filterSearchChange =(e) => {
    setSearchText(e.target.value)
    dispath(searchFilterAction(e.target.value))
   
    
  }
  const handleStatusChange = (e) => {
    setStatus(e.target.value)
    dispath(statusFilterAction(e.target.value))

  }
  const prioriryFilterChange = (e) => {
    setPriority(e)
    dispath(priorityFilterAction(e))
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search value={searchText} onChange={filterSearchChange} placeholder='input search text' />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={prioriryFilterChange}
          value={prioriry}
        >
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
      </Col>
    </Row>
  );
}
