import React from 'react'
import { Form, Field } from 'react-final-form'

const onSubmit = async values => {
  //add in POST request
}

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
)

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

export function SurveyPage() {
    return(
        <Form
        onSubmit={onSubmit}
        validate={values => {
            const errors = {}
            if (!values.firstName) {
            errors.firstName = 'Required'
            }
            if (!values.reception) {
            errors.reception = 'Required'
            }
            if (values.reception === 'yes') {
            if (!values.fruit) {
                errors.fruit = 'Required'
            }
            } else if (values.reception === 'no') {
            if (!values.decline) {
                errors.decline = 'Required'
            }
            }
            return errors
        }}
        >
        {({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                />
                <Error name="firstName" />
            </div>
            <div>
                <label>Do you like to eat fruits?</label>
                <div>
                <label>
                    <Field
                    name="reception"
                    component="input"
                    type="radio"
                    value="yes"
                    />{' '}
                    Yes
                </label>
                <label>
                    <Field
                    name="reception"
                    component="input"
                    type="radio"
                    value="no"
                    />{' '}
                    No
                </label>
                </div>
                <Error name="reception" />
            </div>
            <Condition when="reception" is="yes">
                <div>
                <label>What is the name of your favourite fruit?</label>
                <Field
                    name="fruit"
                    component="input"
                    type="text"
                    placeholder="Favourite fruit"
                />
                <Error name="street" />
                </div>
            </Condition>
            <Condition when="reception" is="no">
                <div>
                <label>Why don't you like fruits?</label>
                <Field
                    name="decline"
                    component="input"
                    type="text"
                    placeholder="Reason for declining"
                />
                <Error name="decline" />
                </div>
            </Condition>
            <div>
                <label>Is it a gift?</label>
                <Field name="gift" component="input" type="checkbox" />
            </div>
            <Condition when="gift" is={true}>
                <div>
                <label>Gift Message</label>
                <Field
                    name="message"
                    component="textarea"
                    placeholder="Gift Message"
                />
                <Error name="message" />
                </div>
            </Condition>
            <div className="buttons">
                <button type="submit" disabled={submitting}>
                Submit
                </button>
                <button type="button" onClick={form.reset} disabled={submitting}>
                Reset
                </button>
            </div>
            </form>
        )}
        </Form>
    )
}
