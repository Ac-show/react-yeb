import React, { memo, useEffect, useState } from 'react'
import {renderRoutes} from 'react-router-config'
import { connect } from 'react-redux'

import {HomeStyle} from './style'
import VerticalMenu from '@/components/verticalMenu'
import ACDetailHeaderPath from './c_page/detailHeaderPath'

import {
  requestMenuList,
  menuList
} from '../../services/home'
import {
  requestStaffDate
} from '../../store/actionCreators'

const ACHome = memo(function ACHome(props) {
  props.requestStaffDate()
  let [menuData, setmenuData] = useState([])
  useEffect(() => {
    requestMenuList().then(res => {
      let menuData = new menuList(res)
      setmenuData(menuData.menuData)
    })
  }, [])
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
        <div className="route-page">
          {textPath.length > 0 && <ACDetailHeaderPath textPath={textPath} />}
          {renderRoutes(props.route.router)}
        </div>
      </div>
    </HomeStyle>
  )
})


const mapStateToProps = store => ({
  staffData: store.staffData
})

const mapDispatchToProps = dispatch => ({
  requestStaffDate() {
    dispatch(requestStaffDate)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ACHome)
