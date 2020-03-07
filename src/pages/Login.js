/*
 * @Author: wangxiang 
 * @Desc:  Form测试
 * @Date: 2020-02-22 15:53:55 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-03-04 18:12:00
 */
import React, { Component } from 'react';
import { Form, Input, Button } from "antd";
import { connect } from '../WReactRedux/index';
// import {Redirect} from 'react-router-dom';
// import myFormCreate from '../components/MyForm';

const FormItem = Form.Item;

export default connect(
  state => ({isLogin: state.loginReducer}),
  {
     login: () => ({ type: "LOGIN" }), 
     logout: () => ({ type: "LOGOUT" }) 
  }
)(
@Form.create()
// @myFormCreate
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form: { validateFields, getFieldValue, getFieldsValue }, login } = this.props;
    console.log('getFieldsValue:', getFieldsValue());
    console.log('getFieldValue name:', getFieldValue('name1'));

    validateFields((err, values) => {
      console.log('validateFields:',err, values);
      if (!err) {
        console.log(values);
        login();
      }
    });
  }

  render() {
    // const {form: {getFieldDecorator}, isLogin, location} = this.props;
    const {form: {getFieldDecorator}, isLogin = false} = this.props;
    console.log('login',this.props);

    // const {redirect = "/"} = location.state || {};
    
    if (isLogin) {
     /*  return <Redirect to={{pathname: redirect}} /> */
      return <div>11</div>
    }else{
      return (
        <div style={{width: 300, margin: 'auto'}}>
          <Form labelCol={{span: 4}} wrapperCol={{span: 16}} onSubmit={this.handleSubmit}>
            <FormItem label="姓名">
              {getFieldDecorator("name1", {
                rules: [
                  { required: true, message: "name required 测试" }
                ]
              })(
              <Input placeholder="please input name" />
              )}
            </FormItem>
  
            <FormItem label="密码">
              {getFieldDecorator("password1", {
                rules: [
                  { required: true, message: "password required 测试" }
                ]
              })(
              <Input placeholder="please input password" />
              )}
            </FormItem>
  
            <FormItem>
              <Button
                htmlType="submit"
                type="primary"
              >
                确定
              </Button>
            </FormItem>
          </Form>
        </div>
      );
    }
  }
}

)
