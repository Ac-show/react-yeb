import React, { memo, useEffect, useState } from 'react'
import { Table, Pagination } from 'element-react'
import { connect } from 'react-redux'

import { basicTableCol } from '../../../../../common/local_data'
import { requestStaffInfo } from '../../../../../services/home'
import { TableStyle, ConBarStyle } from './style'
import { getStaffData } from '../../../../../store/actionCreators'

import ACControlBar from './cotrolBar'

const ACBaseInfo = memo(function ACBaseInfo(props) {
  const [state, setState] = useState({})
  const [size, setSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    requestStaffInfo(currentPage, size).then(res => {
      basicTableCol.data = res.data
      setState(basicTableCol)
      setTotal(res.total)
    })
    
  }, [size, currentPage])
  props.getStaffData(currentPage, size)
  const SizeChange = (size) => {
    setSize(size)
  }
  const CurrentChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div>
      <ConBarStyle>
        <ACControlBar />
      </ConBarStyle>
      <TableStyle>
        <Table
          style={{ width: '100%' }}
          columns={state.columns}
          data={state.data}
          border={true}
          className="table"
        />
        <div className="pagination">
          <Pagination 
            layout="sizes, prev, pager, next, jumper, total" 
            pageSizes={[10, 20, 30, 40, 50, 100]} 
            onCurrentChange={(page) => {CurrentChange(page)}} 
            onSizeChange={(size) => {SizeChange(size)}} 
            pageSize={size} 
            currentPage={currentPage} 
            total={total}
          />
        </div>
      </TableStyle>
    </div>
  )
})


const mapStateToProps = store => ({
  staffData: store.staffData
})

const mapDispatchToProps = dispatch => ({
  getStaffData(currentPage, size) {
    return dispatch(getStaffData(currentPage, size))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(ACBaseInfo)