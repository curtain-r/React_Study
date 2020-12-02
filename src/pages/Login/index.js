import React from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: 'login'  // 默认显示登录表单，可切换成注册表单
    }
  }
  // 初始化
  initPage() {
    notification.open({
      message: (
        <ul>
          <li>初始账号： admin</li>
          <li>初始密码： admin</li>
        </ul>
      ),
      duration: 0,
      className: styleMedia.loginNotification
    });
  }
  // 在组件挂载完成的时候判断是否已经登录
  componentDidMount() {
    if (this.props.userStore.isLogin) {
      this.props.history.push({ pathname: '/' }); // 已经登录直接跳转到首页
      return;
    }
    this.initPage();
  }
  // 登录注册切换
  switchShowBox = (box) => {
    this.setState({
      showBox: box
    })
  }
  render() {
    let { showBox } = this.state;
    return (
      <div className = {styleMedia.loginWrap }>
        <div>
					<div className={style.backgroundBox}></div>
					<div className={style.container}>
						<LoginForm
							className={showBox === 'login' ? `${style.box} ${style.showBox}` : `${style.box} ${style.hiddenBox}`}
							switchShowBox={this.switchShowBox}
						/>
						<RegisterForm
							className={showBox === 'register' ? `${style.box} ${style.showBox}` : `${style.box} ${style.hiddenBox}`}
							switchShowBox={this.switchShowBox}
						/>
					</div>
				</div>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  userStore: state.userStore
})

export default connect(mapStateToProps, null)(Login);