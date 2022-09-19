import React from 'react'
import { useField, ErrorMessage } from 'formik'

const TextField = ({ label, name, type }) => {
    const [field, meta] = useField({ name, type })
    return (
        
        <div style={{ marginBottom:'10px' }}>
            <label htmlFor={field.name}>{label}</label>
            <br />
            <input {... field} />
            <br />
            <ErrorMessage name={field.name}/>
        </div>
    )
}

export default TextField
