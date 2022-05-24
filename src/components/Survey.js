import React from "react";
import { Field } from "react-final-form"

export function SurveyPage() {
    
    return(
        <>
            <form>
                <label>First Name</label>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name"
                />
            </form>
        </>
    );
}
