import React, { memo, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default memo(function VerticalMenuItem(props) {
  const menu = useRef(null)
  const icon = useRef(null)
  useEffect(() => {
    props.collect({menu, icon})
  }, [])
  return (
    <ItemStyle onClick={e => props.onClick(e, menu, icon)}>
      <div className="title hover-ele"><i></i>{props.menu.title}<span><b ref={icon}></b></span></div>
      <div className="items" ref={menu} style={{height: 0 + "px"}} >
        {props.menu.items.map((item) => {
          return <NavLink to={item.path} exact={item.exact} className="hover-ele" key={item.title}>{item.title}</NavLink>
        })}
      </div>
    </ItemStyle>
  )
})

const ItemStyle = styled.div`
  .title {
    cursor: pointer;;
    font-size: 14px;
    background-color: #ffffff;
    padding: 0 20px;
    box-sizing: border-box;
    height: 56px;
    width: 200px;
    line-height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid #e6e6e6;

    i {
      display: inline-block;
      height: 14px;
      overflow: hidden;
      width: 20px;
      background-color: red;
    }

    span {
      flex: 1;
      text-align: right;
      
      b {
        display: inline-block;
        transition: all .3s;
        transform: rotateZ(90deg)
      }
    }
  }

  .items {
    width: 200px;
    box-sizing: border-box;
    border-right: 1px solid #e6e6e6;
    transition: all .3s;
    overflow: hidden;

    a {
      display: block;
      width: 200px;
      height: 50px;
      line-height: 50px;
      padding: 0 45px 0 40px;
      font-size: 14px;
      text-decoration: none;
      box-sizing: border-box;
      color: #000000;
    }

    .active {
      color: #409EFF;
    }
  }

  .hover-ele:hover {
    background-color: #ecf5ff;
  }

`


