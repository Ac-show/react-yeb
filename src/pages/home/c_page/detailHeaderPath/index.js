import React, { memo } from 'react'
import styled from 'styled-components'

export default memo(function ACDetailHeaderPath(props) {
  return (
    <Style>
      <b>首页</b>
      <span>{'>'}</span>
      {props.textPath[0]}
      <span>{'>'}</span>
      {props.textPath[1]}
    </Style>
  )
})


const Style = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: #606266;

  b {
    color: #000000;
  }

  span {
    font-size: 18px;
    color: #606266;
    opacity: 0.5;
    margin: 0 3px;
  }

`