import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'

import {HomeStyle} from './style'
import VerticalMenu from '@/components/verticalMenu'
import ACDetailHeaderPath from './c_page/detailHeaderPath'

import {
  menuData
} from '../../common/local_data.js'

export default memo(function ACHome(props) {
  const path = props.location.pathname
  const textPath = []
  menuData.forEach(menu => {
    for (let i in menu) {
      if (i === 'items') {
        menu[i].forEach(item => {
          if (item.path === path) {
            textPath.push(menu.title)
            textPath.push(item.title)
          }
        })
      }
    }
  })
  return (
    <HomeStyle>
      <div className="home-header">
        <div className="title">云E办</div>
      </div>
      <div className="home-context">
        <VerticalMenu menuData={menuData} />
        <div>
          <ACDetailHeaderPath textPath={textPath} />
          {renderRoutes(props.route.router)}
        </div>
      </div>
    </HomeStyle>
  )
})
