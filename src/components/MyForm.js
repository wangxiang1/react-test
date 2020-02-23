import React, { Component } from 'react';

export default function myFormCreate(Cmp) {
  
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {errors: {}}
      this.options={}
    }

    onChange = (e) => {
      let {name, value} = e.target;

      this.setState({[name]: value}, () => {
        this.validateField(name, value)
      });
    }

    // getFieldDecorator(field, {rules})(Component)
    getFieldDecorator = (field, option) => {
      this.options[field] = option;

      return (InputCmp) => {
        const Com = React.cloneElement(
          InputCmp,
          {
            name: field,
            value: this.state[field],
            onChange: this.onChange
          }
        )
        // console.log('state.errors:', this.state.errors)
        return (
          <div>
            {Com}
            <div style={{display: this.state.errors[field] ? 'block' : 'none', color: 'red'}}>
              {this.state.errors[field] && this.state.errors[field].message ? this.state.errors[field].message : ''}
            </div>
          </div>
        );
      }
    }

    validateFields = (callback) => {
      // 校验错误信息
      const errors = {};
      const state = {...this.state};
      
      for (const name in this.options) {

        const error = this.validateField(name, state[name]);
        console.log(error);

        if(error){
          errors[name] = error;
        }else{
          delete errors[name]
        }
      }
      console.log(errors);
      this.setState({errors});

      if(JSON.stringify(errors) === "{}"){
        callback(undefined, state)
      }else{
        callback(errors, state)
      }
    }

    validateField = (field, value) => {
      console.log('validateField:',field, value);
      let error;
      const {rules = []} = this.options[field];

      rules.forEach(rule => {
        const {required, message=`${field} is required`} = rule;
        
        if(required && !value){
          error = {required, message};
          this.setState({errors: {...this.state.errors, [field]: error}});
        }else{
          const errors = {...this.state.errors};
          delete errors[field];
          this.setState({errors});
        }

      })

      return error;
    }

    getFieldsValue = () => {
      return {...this.state}
    }

    getFieldValue = (field) => {
      return this.state[field]
    }

    render() { 
      return ( 
        <div>
          <Cmp 
            form={{
              getFieldDecorator: this.getFieldDecorator,
              validateFields: this.validateFields,
              getFieldsValue: this.getFieldsValue,
              getFieldValue: this.getFieldValue,
            }}
          />
        </div> 
      );
    }
  }
}