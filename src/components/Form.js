import React, {useContext} from "react";
import { Formik } from "formik";
import AuthContext from '../context/auth-context'

const Form = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        nombre: "Ale",
        correo: "osiamusical@gmail.com",
        password:""
      }}
      onSubmit={async (valores, funciones) => {
        funciones.resetForm({ nombre: "", correo: "", password:"" });
        await AuthCtx.register(valores.nombre, valores.correo, valores.password);
        
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.nombre) {
          errores.nombre = "ingresa un nombre";
        } else if (!/^[a-zA-Z\s]{1,40}$/.test(valores.nombre)) {
          errores.nombre =
            "Solo puede contener letras y espacios no mayor a 40 char";
        }
        if (!valores.correo) {
          errores.correo = "ingresa un correo";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)
        ) {
          errores.correo = "Correo solo puede contener letras numeros, guiones";
        }
        return errores;
      }}
    >
      {({handleSubmit, values,handleChange,errors,handleBlur,touched}) => (
        <form className="formulario" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errors.nombre && (
              <div className="error">{errors.nombre}</div>
            )}
          </div>
          <div>
            <label htmlFor="correo">Correo</label>
            <input
              type="text"
              id="correo"
              name="correo"
              value={values.correo}
              onChange={handleChange}
              handleBlur={handleBlur}
            />
            {touched.correo && errors.correo && (
              <div className="error">{errors.correo}</div>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              handleBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <div className="error">{errors.password}</div>
            )}
          </div>
          <div>
            <button type="submit">Darle mecha</button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
