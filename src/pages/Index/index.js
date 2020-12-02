/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Layout, BackTop } from 'antd';
import SiderNav from '';
import HeaderBar from '../../components/HeaderBar';
import MenuRoutes from '';


const { Sider, Header, Content, Footer } = Layout;



class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    return (
      <div id="page">
        <Layout>
          <Sider
            collapsible
            trigger={null}
            collapsed={this.state.collapsed}
          >
            <SiderNav collapsed={this.state.collapsed} />
          </Sider>
          <Layout>
            <Header style={{background: '#fff', padding: '0 16px'}}>
              <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle} />
            </Header>
            <Content>
             <div style={{padding: '16px', position: 'relative'}}>
               <MenuRoutes />
             </div>
            </Content>
            <Footer style={{textAlign: 'center', paddingTop: '0'}}>
                React-Admin ©2020 Created By Sanguine
                <a target="_blank" href="https://curtain-r.github.io">github</a>
              </Footer>
          </Layout>
        </Layout>
        <BackTop visibilityHeight={200} style={{right: 50}} />
      </div>
    )
  }
}

export default  Index;