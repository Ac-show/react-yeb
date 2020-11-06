import styled from 'styled-components'

const LoginPage = styled.div`
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 422px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  text-align: center;

  h3 {
    margin-bottom: 40px;
  }

  input {
    display: block;
  }

  div {
    width: 100%;
    display: flex;
  }

  .login-input {
    box-sizing: border-box;
    width: 350px;
    height: 32px;
    padding: 0 15px;
    border: 1px solid #DCDFE6;
    color: #606266;
    margin-bottom: 20px;
    outline: none;
  }

  .identify-code {
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      background-color: #FFF;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #DCDFE6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      height: 32px;
      width: 245px;
      line-height: 32px;
      padding: 0 15px;
      outline: none;
    }
  }

  .save-info {
    color: #409EFF;
    font-size: 14px;
    margin: 15px 0;
    display: flex;
    align-items: center;
    input {
      margin-right: 10px;
    }
  }

  .login-btn {
    color: #FFF;
    background-color: #409EFF;
    border: none;
    width: 100%;
    height: 32px;
    border-radius: 8px;
    outline: none;
  }

`


export default LoginPage