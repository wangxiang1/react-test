/* eslint-disable react/destructuring-assignment, no-param-reassign, react/no-access-state-in-setstate, react/jsx-indent, no-useless-escape,react/no-unused-state,no-unused-vars,prefer-destructuring,react/jsx-boolean-value,class-methods-use-this,camelcase */
import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import suggest from './u2405.png';

export default function Suggestion(props) {
  return (
    <div style={{ width: '100%', padding: '12% 12% 0 12%' }}>
      <Row>
        <Col span={10} style={{padding: '60px 0 0 90px'}}>
          <h2>因平台服务升级改版，</h2>
          <h2>现已将所有业务迁移至新地址，</h2>
          <h2>我们将继续优质服务，</h2>
          <h2>感谢您的支持！</h2>
          <p></p>
          <Button
            type="primary"
            style={{backgroundColor: '#655fd9', borderColor: '#655fd9'}}
            onClick={() => {
              window.open('http://10.236.10.131/#/');
            }}
          >
            立即使用
          </Button>
          <br />
        </Col>
        <Col span={14}>
          <img alt="pic" src={suggest} style={{ width: '540px', height: '355px' }} />
        </Col>
      </Row>
    </div>
  );
}
