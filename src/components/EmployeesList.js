import React, { useEffect, useState } from "react";
import { tabs } from "../App";
import { Table, Button, Card, Container } from "reactstrap";
import { FaEdit, FaLeaf } from "react-icons/fa";

const fakeEmployees = [
  {
    employee_id: "E001",
    employee_name: "John Doe",
    email: "john.doe@example.com",
    phone_number: "+1234567890",
    date_of_joining: "2023-01-15",
    address: "123 Main St, Anytown, USA",
    is_active: true,
  },
  {
    employee_id: "E002",
    employee_name: "Jane Smith",
    email: "jane.smith@example.com",
    phone_number: "+0987654321",
    date_of_joining: "2022-11-23",
    address: "456 Elm St, Sometown, USA",
    is_active: false,
  },
  {
    employee_id: "E003",
    employee_name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone_number: "+1122334455",
    date_of_joining: "2024-03-01",
    address: "789 Oak St, Othercity, USA",
    is_active: true,
  },
  {
    employee_id: "E004",
    employee_name: "Bob Brown",
    email: "bob.brown@example.com",
    phone_number: "+2233445566",
    date_of_joining: "2023-07-19",
    address: "321 Pine St, Smalltown, USA",
    is_active: true,
  },
  {
    employee_id: "E005",
    employee_name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone_number: "+3344556677",
    date_of_joining: "2023-02-10",
    address: "654 Maple St, Middletown, USA",
    is_active: false,
  },
  {
    employee_id: "E006",
    employee_name: "Dana Lee",
    email: "dana.lee@example.com",
    phone_number: "+4455667788",
    date_of_joining: "2022-09-05",
    address: "987 Cedar St, Bigcity, USA",
    is_active: true,
  },
  {
    employee_id: "E007",
    employee_name: "Eva Martinez",
    email: "eva.martinez@example.com",
    phone_number: "+5566778899",
    date_of_joining: "2024-01-12",
    address: "123 Birch St, Littletown, USA",
    is_active: true,
  },
  {
    employee_id: "E008",
    employee_name: "Frank Wilson",
    email: "frank.wilson@example.com",
    phone_number: "+6677889900",
    date_of_joining: "2023-04-22",
    address: "456 Willow St, Greentown, USA",
    is_active: false,
  },
  {
    employee_id: "E009",
    employee_name: "Grace Brown",
    email: "grace.brown@example.com",
    phone_number: "+7788990011",
    date_of_joining: "2022-12-18",
    address: "789 Cherry St, Blueville, USA",
    is_active: true,
  },
  {
    employee_id: "E010",
    employee_name: "Hank Green",
    email: "hank.green@example.com",
    phone_number: "+8899001122",
    date_of_joining: "2023-05-16",
    address: "321 Oak St, Darktown, USA",
    is_active: true,
  },
  {
    employee_id: "E011",
    employee_name: "Ivy Adams",
    email: "ivy.adams@example.com",
    phone_number: "+9900112233",
    date_of_joining: "2022-10-29",
    address: "654 Elm St, Hometown, USA",
    is_active: false,
  },
  {
    employee_id: "E012",
    employee_name: "Jack Wilson",
    email: "jack.wilson@example.com",
    phone_number: "+1011122334",
    date_of_joining: "2024-02-20",
    address: "987 Pine St, Midtown, USA",
    is_active: true,
  },
];

const EmployeesList = ({ tabChanged }) => {
  const [key, setKey] = useState("");

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch("https://api.example.com/employees")
  //     .then((response) => response.json())
  //     .then((data) => setEmployees(data))
  //     .catch((error) => console.error("Error fetching employee data:", error));
  // }, []);

  // const handleEdit = (employeeId) => {
  //   // Handle edit functionality here
  //   console.log("Edit employee with ID:", employeeId);
  // };

  const renderTableHeader = () => {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <li>
          <Button
            type="button"
            color="primary"
            onClick={() => tabChanged(tabs.HOME_VIEW)}
          >
            Home
          </Button>
        </li>
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <li>
            <input
              value={key}
              type="text"
              onChange={(e) => setKey(e.target.value)}
              placeholder="Search By employee Name"
            />
          </li>
          <li>
            <Button
              type="button"
              onClick={() => tabChanged(tabs.EMPLOYEE_ADD_FORM)}
            >
              +
            </Button>
          </li>
        </ul>
      </nav>
    );
  };

  const filteredEmployees = fakeEmployees.filter((eachEmp) =>
    eachEmp.employee_name.toLowerCase().includes(key)
  );
  return (
    <Container>
      <Card lg={8} className="shadow p-3 m-3">
        <h4 className="text-primary">Employee List</h4>

        {renderTableHeader()}
        <Table striped>
          <thead className="table-header">
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date of Joining</th>
              <th>Address</th>
              <th>Is Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.employee_id}>
                <td>{employee.employee_id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone_number}</td>
                <td>{employee.date_of_joining}</td>
                <td>{employee.address}</td>
                <td>
                  <input type="checkbox" checked={employee.is_active} />
                </td>
                <td>
                  <Button
                    color="primary"
                    onClick={() =>
                      tabChanged(tabs.EMPLOYEE_UPDATE_FORM, employee)
                    }
                  >
                    <FaEdit />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default EmployeesList;
