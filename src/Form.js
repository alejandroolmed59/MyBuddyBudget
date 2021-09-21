import React from "react";
import { Formik } from "formik";

const Form = () => {
  return (
    <div>
      <Formik
        initialValues={{
          nombre:"Ale",
          correo:'osiamusical@gmail.com'
        }}
        onSubmit={(valores, funciones)=>{
          funciones.resetForm({ nombre: '', correo: '' });

          console.log(valores)
        }
        }
        validate={(valores)=>{
          let errores = {};
            if(!valores.nombre){
              errores.nombre = "ingresa un nombre"
            }else if(!/^[a-zA-Z\s]{1,40}$/.test(valores.nombre)){
              errores.nombre="Solo puede contener letras y espacios no mayor a 40 char"
            }
            if(!valores.correo){
              errores.correo = "ingresa un correo"
            }
            else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
              errores.correo = "Correo solo puede contener letras numeros, guiones"
            }
          return errores;
        }}
      >
        {({handleSubmit, values, handleChange, errors, handleBlur, touched}) => (
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
              {touched.nombre && errors.nombre&&<div className="error">{errors.nombre}</div>}
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
              {touched.correo && errors.correo&&<div className="error">{errors.correo}</div>}
            </div>
            <div>
              <button type="submit">Darle mecha</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
