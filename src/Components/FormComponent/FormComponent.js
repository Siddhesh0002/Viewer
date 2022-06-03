import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";
import { useNavigate } from "react-router-dom";
import useStore from "../../Store/Store";

const FormComponent = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  return (
    <Form
      autoComplete="off"
      className="formContainer"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16, offset: 2 }}
      size="large"
      onFinish={(values) => {
        console.log({ values });

        setSuccess(true);

        if (!success) {
          navigate("view");
          useStore.setState({
            data: values,
          });
        }
      }}
      onFinishFailed={(error) => {
        console.log({ error });
        setSuccess(false);
      }}
    >
      <Form.Item
        name="firstName"
        label="Name"
        className="labelContainer"
        rules={[
          {
            message: "Please enter your name",
          },
          { whitespace: true },
          { min: 3 },
        ]}
        hasFeedback
      >
        <Input placeholder="Type your name" />
      </Form.Item>

      <Form.Item name="gender" label="Gender">
        <Select placeholder="Select your gender">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            type: "integer",
            min: 0,
            max: 200,
            message: "Please input a valid age.",
          },
        ]}
        initialValue={0}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 10, offset: 6 }}>
        <Button block className="btn" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
