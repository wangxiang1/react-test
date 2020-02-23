/*
 * @Author: wangxiang 
 * @Desc:  Form测试
 * @Date: 2020-02-22 15:53:55 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-02-22 18:40:22
 */
import React, { Component } from 'react';
import { Form, Input, Button } from "antd";
import myFormCreate from '../components/MyForm';

const FormItem = Form.Item;

// @Form.create()
@myFormCreate
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form: { validateFields, getFieldValue, getFieldsValue } } = this.props;
    console.log('getFieldsValue:', getFieldsValue());
    console.log('getFieldValue name:', getFieldValue('name1'));

    validateFields((err, values) => {
      console.log('validateFields:',err, values);
      if (!err) {
        console.log(values);
      }
    });
  }

  render() {
    const {form: {getFieldDecorator}} = this.props;
    
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

export default Login;
