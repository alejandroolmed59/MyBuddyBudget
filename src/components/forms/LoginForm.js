import React, { useContext } from "react";
import { Formik } from "formik";
import AuthContext from "../../context/auth-context";
import { Form, Input, Button, Checkbox } from "antd";
import {  LockOutlined, MailOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

const LoginForm = () => {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        correo: "",
        password: "",
      }}
      onSubmit={async (valores, funciones) => {
        console.log(valores)
        try {
          await AuthCtx.login(
            valores.correo,
            valores.password
          );
          history.push("/");
          funciones.resetForm({correo: "", password: "" });
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({
        handleSubmit,
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
      }) => (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'15em'}}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="correo"
              rules={[
                {
                  required: true,
                  message: "Please input your email",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                id="correo"
                name="correo"
                value={values.correo}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  min: 5,
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <div>
                New User? 
                <Button type="dashed" onClick={()=>history.push("/register")}>
                  Register now!
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
