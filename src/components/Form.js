import React, { useContext } from "react";
import { Formik } from "formik";
import AuthContext from "../context/auth-context";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

const Formulario = () => {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        nombre: "",
        correo: "",
        password: "",
      }}
      onSubmit={async (valores, funciones) => {
        try{
          await AuthCtx.register(
            valores.nombre,
            valores.correo,
            valores.password
            );
            history.push('/home');
            funciones.resetForm({ nombre: "", correo: "", password: "" });
          }catch(e){
            console.log(e)
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
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="nombre"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              id="nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            />
          </Form.Item>
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
                min:5,
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
              Register
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default Formulario;
