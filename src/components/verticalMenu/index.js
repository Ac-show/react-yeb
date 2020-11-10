import React, { memo } from 'react'

import VerticalMenuItem from './verticalMenuItem'

export default memo(function ACVerticalMenu(props) {
  let refs = []
  const clickMenu = (e, menu, icon) => {
    let height = 0
    for (let i = 0; i< menu.current.children.length; i++) {
      height += menu.current.children[i].offsetHeight
    }
    if (menu.current.style.height === '0px') {
      refs.forEach(ref => {
        ref.menu.current.style.height = '0px'
        ref.icon.current.style.transform = 'rotateZ(90deg)'
      })
      menu.current.style.height = height + 'px'
      icon.current.style.transform = 'rotateZ(270deg)'
    } else if (e.target.tagName !== 'A' && menu.current.style.height !== '0px') {
      menu.current.style.height = '0px'
      icon.current.style.transform = 'rotateZ(90deg)'
    }
  }
  // 搜集verticalMenu的ref
  const collect = (ref) => {
    refs.push(ref)
  }
  return (
    <div style={{display: "inline-block"}}>
      {props.menuData.map((menu) => {
        return <VerticalMenuItem onClick={clickMenu} collect={collect} menu={menu} key={menu.title}/>
      })}
    </div>
  )
})

