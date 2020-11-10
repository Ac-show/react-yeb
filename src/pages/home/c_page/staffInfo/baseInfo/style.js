import styled from 'styled-components'

export const TableStyle = styled.div`
    
  .table {
    font-size: 12px;
    color: #606266;
    width: 100%;

    

    th {
      padding: 8px 0!important;
    }

    .columns {
      height: 41px;
      box-sizing: border-box;
      padding: 0;
    }

    .button {
      padding: 4px;
      border: 1px solid #DCDFE6;
      border-radius: 4px;
    }
  }

  .pagination {
    display: flex;
    justify-content: flex-end;

    li.number, li.more, button {
      width: 30px;
      height: 28px;
      margin: 0 5px;
      background-color: #f4f4f5;
      border: none;
      color: 606266;
      border-radius: 2px;
    }

    li.active {
     background-color: #409eff; 
    }

  }
`

export const ConBarStyle = styled.div`
  .con-bar {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    
    span, input, button {
      font-size: 12px;
      height: 32px;
    }

    .search-input {
      width: 300px;
    }

    .left {
      display: flex;

      .search {
        margin-left: 10px;
      }
    }

    .right {

      .output {
        margin: 0 10px;
      }
    }

    .el-icon-search {
      position: absolute;
      left: 0;
    }

    .el-input__inner {
      padding-left: 35px;
    }
  }
`