import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { tabs } from "../App";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

const EmployeeForm = ({ update, initialData = {}, tabChanged }) => {
  const formik = useFormik({
    initialValues: {
      employee_id: initialData.employee_id || "",
      employee_name: initialData.employee_name || "",
      email: initialData.email || "",
      phone_number: initialData.phone_number || "",
      date_of_joining: initialData.date_of_joining || "",
      address: initialData.address || "",
      is_active: initialData.is_active || false,
    },

    validationSchema: Yup.object({
      employee_id: Yup.string().required("Employee ID is required"),
      employee_name: Yup.string().required("Employee Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      date_of_joining: Yup.date().required("Date of Joining is required"),
    }),

    onSubmit: (values) => {
      console.log("Form data", values);
      // Pass the form values to the parent component or handle form submission
    },
  });

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={6} className="m-auto">
          <Card className="shadow">
            <div className="card-body">
              <h4 className="text-primary">
                {update ? "Update Employee" : "Add Employee"} Form
              </h4>
              <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <Label for="employee_id">Employee ID</Label>
                  <Input
                    type="text"
                    id="employee_id"
                    name="employee_id"
                    value={formik.values.employee_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly={update}
                    invalid={
                      formik.touched.employee_id && !!formik.errors.employee_id
                    }
                  />
                  <FormFeedback>{formik.errors.employee_id}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="employee_name">Employee Name</Label>
                  <Input
                    type="text"
                    id="employee_name"
                    name="employee_name"
                    value={formik.values.employee_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    invalid={
                      formik.touched.employee_name &&
                      !!formik.errors.employee_name
                    }
                  />
                  <FormFeedback>{formik.errors.employee_name}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    invalid={formik.touched.email && !!formik.errors.email}
                  />
                  <FormFeedback>{formik.errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="phone_number">Phone Number</Label>
                  <Input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="date_of_joining">Date of Joining</Label>
                  <Input
                    type="date"
                    id="date_of_joining"
                    name="date_of_joining"
                    value={formik.values.date_of_joining}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    invalid={
                      formik.touched.date_of_joining &&
                      !!formik.errors.date_of_joining
                    }
                  />
                  <FormFeedback>{formik.errors.date_of_joining}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </FormGroup>

                {update && (
                  <FormGroup>
                    <Label for="is_active">Is Active</Label>
                    <Input
                      type="checkbox"
                      id="is_active"
                      name="is_active"
                      checked={formik.values.is_active}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </FormGroup>
                )}

                <Button type="submit" color="primary" className="mr-2">
                  {update ? "Update" : "Add"} Employee
                </Button>

                <Button
                  type="button"
                  color="secondary"
                  onClick={() => tabChanged(tabs.HOME_VIEW)}
                >
                  Cancel
                </Button>

                {!update && (
                  <Button type="submit" color="primary" className="mr-2">
                    Add More
                  </Button>
                )}
              </form>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeForm;
