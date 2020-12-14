import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';

export default () => {
    const generateOnSubmit = () => async (values) => {
        console.log(values)
        axios.post('/', values, { headers: {'Content-Type': 'multipart/form-data'}})
             .then(() => console.log('success'))
             .catch(() => console.log('failure'))
    }

    const form = useFormik({
        onSubmit: generateOnSubmit(),
        initialValues: { file: ""}
    })

    return (
        <form action='/' className="form-inline mb-3" method="post" encType="multipart/form-data" onSubmit={form.handleSubmit}>
          <div className="input-group flex-row w-100">
            <input type="file" name="file" className="form-control" onChange={form.handleChange} value={form.values.file}/>
            {/* <div>
                <label htmlFor="year">choose year</label>
                <select name="year" id="year" onChange={form.handleChange} value={form.values.year}>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                </select>
                <label htmlFor="month">choose year</label>
                <select name="month" id="month" onChange={form.handleChange} value={form.values.month}>
                    <option value="01">Январь</option>
                    <option value="02">Февраль</option>
                </select>
            </div> */}
            <div className="input-group-prepend">
              <button type="submit" className=" btn btn-primary btn-sm">
                 Submit
              </button>
            </div>
          </div>
        </form>
    )
}

