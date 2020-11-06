import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import router from './router'

export default memo(function App() {
  return (
    <HashRouter>
      {renderRoutes(router)}
    </HashRouter>
  )
})
