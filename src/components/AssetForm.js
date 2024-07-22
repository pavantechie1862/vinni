import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

const AssetForm = ({ update, tabChanged, initialData = {} }) => {
  const initialValues = {
    asset_name: initialData.asset_name || "",
    purchase_date: initialData.purchase_date || "",
    warranty_expire_date: initialData.warranty_expire_date || "",
    serial_number: initialData.serial_number || "",
    amount: initialData.amount || "",
    invoice_number: initialData.invoice_number || "",
    employee_id: initialData.employee_id || "",
    is_active: initialData.is_active || false,
  };

  const validationSchema = Yup.object({
    asset_name: Yup.string().required("Asset Name is required"),
    purchase_date: Yup.string().required("Purchase Date is required"),
    amount: Yup.number()
      .required("Amount is required")
      .positive("Amount must be positive")
      .integer("Amount must be an integer"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    // Add your form submission logic here, e.g., dispatch an action or make an API call
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={6} className="m-auto">
          <Card className="shadow">
            <div className="card-body">
              <h4 className="text-primary">
                {update ? "Update Asset" : "Add Asset"} Form
              </h4>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ touched, errors }) => (
                  <Form>
                    <FormGroup>
                      <Label for="asset_name">Asset Name *</Label>
                      <Field
                        type="text"
                        id="asset_name"
                        name="asset_name"
                        as={Input}
                        invalid={touched.asset_name && !!errors.asset_name}
                      />
                      <ErrorMessage
                        name="asset_name"
                        component={FormFeedback}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="purchase_date">Purchase Date *</Label>
                      <Field
                        type="date"
                        id="purchase_date"
                        name="purchase_date"
                        as={Input}
                        invalid={
                          touched.purchase_date && !!errors.purchase_date
                        }
                      />
                      <ErrorMessage
                        name="purchase_date"
                        component={FormFeedback}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="warranty_expire_date">
                        Warranty Expire Date
                      </Label>
                      <Field
                        type="date"
                        id="warranty_expire_date"
                        name="warranty_expire_date"
                        as={Input}
                        invalid={
                          touched.warranty_expire_date &&
                          !!errors.warranty_expire_date
                        }
                      />
                      <ErrorMessage
                        name="warranty_expire_date"
                        component={FormFeedback}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="serial_number">Serial Number</Label>
                      <Field
                        type="text"
                        id="serial_number"
                        name="serial_number"
                        as={Input}
                        invalid={
                          touched.serial_number && !!errors.serial_number
                        }
                      />
                      <ErrorMessage
                        name="serial_number"
                        component={FormFeedback}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="amount">Amount *</Label>
                      <Field
                        type="number"
                        id="amount"
                        name="amount"
                        as={Input}
                        invalid={touched.amount && !!errors.amount}
                      />
                      <ErrorMessage name="amount" component={FormFeedback} />
                    </FormGroup>

                    <FormGroup>
                      <Label for="invoice_number">Invoice Number</Label>
                      <Field
                        type="text"
                        id="invoice_number"
                        name="invoice_number"
                        as={Input}
                        invalid={
                          touched.invoice_number && !!errors.invoice_number
                        }
                      />
                      <ErrorMessage
                        name="invoice_number"
                        component={FormFeedback}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="employee_id">Employee ID</Label>
                      <Field
                        type="text"
                        id="employee_id"
                        name="employee_id"
                        as={Input}
                        invalid={touched.employee_id && !!errors.employee_id}
                      />
                      <ErrorMessage
                        name="employee_id"
                        component={FormFeedback}
                      />
                    </FormGroup>

                    {update && (
                      <FormGroup>
                        <Label for="is_active">Is Active</Label>
                        <Input
                          type="checkbox"
                          id="is_active"
                          name="is_active"
                          checked={initialValues.is_active}
                          onChange={initialValues.handleChange}
                          onBlur={initialValues.handleBlur}
                        />
                      </FormGroup>
                    )}

                    <Button type="submit" color="primary">
                      {update ? "Update" : "Add"} Asset
                    </Button>
                    <Button
                      type="button"
                      color="secondary"
                      onClick={() => tabChanged(tabs.HOME_VIEW)}
                    >
                      Cancel
                    </Button>
                    {!update && (
                      <Button type="submit" color="primary">
                        Add more
                      </Button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AssetForm;
