import React, { memo, useState } from 'react'
import {
  Input,
  Button
} from 'element-react'


export default memo(function ACControlBar(prop) {
  const [staffName, setStaffName] = useState('')

  const searchStaff = () => {
    console.log(0);
  }
  return (
    <div className="con-bar">
      <div className="left">
        <Input
          icon="search"
          placeholder="请输入员工名进行搜索..."
          className="search-input"
          value={staffName}
          onChange={value => setStaffName(value)}
        />
        <Button type="primary" icon="search" className="search" onClick={searchStaff}>搜索</Button>
        <Button type="primary" icon="arrow-down">高级搜索</Button>
      </div>
      <div className="right">
      <Button type="success" icon="upload2">导入数据</Button>
      <Button type="success" icon="upload2" className="output">导出数据</Button>
      <Button type="primary" icon="plus">添加员工</Button>
      </div>
    </div>
  )
})
