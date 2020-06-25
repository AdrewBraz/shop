import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

const mapStateToProps = (state) => {
    console.log(state)
    const props = state;
    return props;
}

export default () => {
    let history = useHistory();

    const goToStore = (values) => {
        const { store } = values;
        history.push(`/${store}`)
        // this.context.router.transitionTo(`/store/${value}`)
    }

        return(
            // <form className="store-selector" onSubmit={ this.goToStore.bind(this) } >
            //     <h2>Please enter the Store</h2>
            //     <select className="store-select" ref={(value)=> this.storeName = value}>
            //         <option value="catch of the day" type="submit" >Catch Of The Day </option>
            //         <option value="beer card" type="submit" >Beer Card </option>
            //         <option value="king grill" type="submit" >King Of The Grill </option>
            //     </select>    
            //     <button type="submit">Select Type</button>
            // </form>
            <Formik
                initialValues={{
                  store: 'catch of the day'
                }}
                onSubmit={goToStore}
            >
            {({ isSubmitting }) => (
              <Form className="store-selector">
                <Field className="store-select"
                  component="select"
                  id="store"
                  name="store"
                  multiple={false}
                >
                  <option value="catch of the day">Catch Of The Day</option>
                  <option value="king grill">King Grill</option>
                  <option value="beer card">Beer Card</option>
                </Field>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
              </Form>
            )}
          </Formik>
        )
}
