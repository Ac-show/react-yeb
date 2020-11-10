import React, { memo, useState } from 'react'
import { connect } from 'react-redux'

import { requestLogin } from '@/services/login'
import {
  initToken
} from '../../store/actionCreators'
import LoginPage from './style'

const ACLogin = memo(function(props) {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
    code: ''
  })
  const login = () => {
    requestLogin(loginInfo.username, loginInfo.password, loginInfo.code).then((res) => {
      if (res.code === 200) {
        props.initToken(res.obj.token)
        props.history.push('/home')
        window.sessionStorage.setItem('token', res.obj.tokenHead + res.obj.token)
      }
    })
  }
  return (
    <LoginPage>
      <h3>系统登录</h3>
      <input className='login-input' placeholder="请输入用户名" type="text" value={loginInfo.username} onChange={e => setLoginInfo({...loginInfo, username: e.target.value})} />
      <input className='login-input' placeholder="请输入密码" type="password" value={loginInfo.password} onChange={e => setLoginInfo({...loginInfo, password: e.target.value})} />
      <div className="identify-code">
        <input type="text" placeholder="点击图片更换验证码" value={loginInfo.code} onChange={e => setLoginInfo({...loginInfo, code: e.target.value})} />
        <img src='/captcha' alt="验证码" onClick={e => refreshCode(e)} />
      </div>
      <div className="save-info">
        <input type="checkbox" id="saveInfo" />
        <label htmlFor="saveInfo">记住我</label>
      </div>
      <input type="submit" value="登录" className="login-btn" onClick={e => login()} />
    </LoginPage>
  )
})


const refreshCode = (e) => {
  e.target.src = '/captcha'
}

const mapStateToProps = store => ({
  token: store.token
})

const mapDispachToProps = dispatch => ({
  initToken(token) {
    dispatch(initToken(token))
  }
})

export default connect(mapStateToProps, mapDispachToProps)(ACLogin)

// export default ACLogin


