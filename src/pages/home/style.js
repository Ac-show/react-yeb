import styled from 'styled-components'

export const HomeStyle = styled.div`
  width: 100%;

  .home-header {
    background-color: #409eff;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;

    .title {
      font-size: 30px;
      font-family: '华文楷体';
      color: #ffffff;
    }
  }

  .home-context {
    width: 100%;
    display: flex;
  }

  .route-page {
    box-sizing: border-box;
    padding: 20px;
    flex: 1;
    overflow: hidden;
    padding-bottom: 250px;
  }
`