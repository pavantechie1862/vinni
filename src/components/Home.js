import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { tabs } from "../App";
import { FaTable, FaPlus } from "react-icons/fa";

const Home = ({ tabChanged }) => {
  console.log(tabChanged);
  useEffect(() => {
    //fetch employees  statistics
  }, []);

  const tabClicked = (tab) => {
    tabChanged(tab);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <h1>Welcome to Asset Management System</h1>
          <p>Manage your assets and employees efficiently</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={6}>
          <Card className="p-3 shadow">
            <h1>Asset Details</h1>
            <Row>
              <Col>
                <p>Total</p>
                <h3>100</h3>
              </Col>

              <Col>
                <p>Allocated</p>
                <h3>100</h3>
              </Col>

              <Col>
                <Button
                  color="success"
                  className="m-2"
                  onClick={() => tabClicked(tabs.ASSET_LIST)}
                >
                  <FaTable className="me-2" />
                </Button>
                <br />
                <Button
                  color="success"
                  className="m-2"
                  onClick={() => tabClicked(tabs.ASSET_ADD_FORM)}
                >
                  <FaPlus className="me-2" />
                </Button>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <p>Total</p>
                <h3>100</h3>
              </Col>

              <Col lg={4}>
                <p>Allocated</p>
                <h3>100</h3>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="p-3 shadow">
            <h1>Employee Details</h1>
            <Row>
              <Col lg={4}>
                <p>Total</p>
                <h3>100</h3>
              </Col>

              <Col lg={4}>
                <p>Allocated</p>
                <h3>100</h3>
              </Col>

              <Col>
                <Button
                  color="success"
                  className="m-2"
                  onClick={() => tabClicked(tabs.EMPLOYEE_LIST)}
                >
                  <FaTable className="me-2" />
                </Button>
                <br />
                <Button
                  color="success"
                  className="m-2"
                  onClick={() => tabClicked(tabs.EMPLOYEE_ADD_FORM)}
                >
                  <FaPlus className="me-2" />
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
