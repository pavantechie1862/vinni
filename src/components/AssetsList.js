// src/components/AssetsList.js
import React, { useState } from "react";
import { Container, Card, Table, Button } from "reactstrap";
import { tabs } from "../App";
import { FaEdit } from "react-icons/fa";

const fakeAssets = [
  {
    asset_name: "Laptop",
    purchase_date: "2023-01-10",
    warranty_expire_date: "2025-01-10",
    serial_number: "LAP123456",
    amount: "1200.00",
    invoice_number: "INV001",
    employee_id: "E001",
    is_active: true,
  },
  {
    asset_name: "Projector",
    purchase_date: "2022-11-15",
    warranty_expire_date: "2024-11-15",
    serial_number: "PRO789012",
    amount: "800.00",
    invoice_number: "INV002",
    employee_id: "E002",
    is_active: false,
  },
  {
    asset_name: "Office Desk",
    purchase_date: "2023-03-05",
    warranty_expire_date: "2026-03-05",
    serial_number: "DES345678",
    amount: "250.00",
    invoice_number: "INV003",
    employee_id: "E003",
    is_active: false,
  },
  {
    asset_name: "Printer",
    purchase_date: "2023-07-21",
    warranty_expire_date: "2025-07-21",
    serial_number: "PRI901234",
    amount: "300.00",
    invoice_number: "INV004",
    employee_id: "E004",
    is_active: false,
  },
  {
    asset_name: "Phone",
    purchase_date: "2024-02-10",
    warranty_expire_date: "2026-02-10",
    serial_number: "PHO567890",
    amount: "600.00",
    invoice_number: "INV005",
    employee_id: "E005",
    is_active: false,
  },
  {
    asset_name: "Office Chair",
    purchase_date: "2023-08-19",
    warranty_expire_date: "2025-08-19",
    serial_number: "CHA234567",
    amount: "150.00",
    invoice_number: "INV006",
    employee_id: "E006",
    is_active: false,
  },
  {
    asset_name: "Whiteboard",
    purchase_date: "2023-06-12",
    warranty_expire_date: "2024-06-12",
    serial_number: "WBI890123",
    amount: "100.00",
    invoice_number: "INV007",
    employee_id: "E007",
    is_active: false,
  },
  {
    asset_name: "Scanner",
    purchase_date: "2024-01-20",
    warranty_expire_date: "2026-01-20",
    serial_number: "SCA345678",
    amount: "200.00",
    invoice_number: "INV008",
    employee_id: "E008",
    is_active: false,
  },
  {
    asset_name: "Air Conditioner",
    purchase_date: "2022-10-30",
    warranty_expire_date: "2025-10-30",
    serial_number: "ACR567890",
    amount: "1500.00",
    invoice_number: "INV009",
    employee_id: "E009",
    is_active: false,
  },
  {
    asset_name: "Storage Cabinet",
    purchase_date: "2023-04-15",
    warranty_expire_date: "2026-04-15",
    serial_number: "CAB678901",
    amount: "350.00",
    invoice_number: "INV010",
    employee_id: "E010",
    is_active: false,
  },
  {
    asset_name: "Router",
    purchase_date: "2024-03-25",
    warranty_expire_date: "2026-03-25",
    serial_number: "ROU123456",
    amount: "120.00",
    invoice_number: "INV011",
    employee_id: "E011",
    is_active: false,
  },
  {
    asset_name: "Microwave Oven",
    purchase_date: "2023-09-12",
    warranty_expire_date: "2025-09-12",
    serial_number: "MIC789012",
    amount: "180.00",
    invoice_number: "INV012",
    employee_id: "E012",
    is_active: true,
  },
];

const AssetsList = ({ tabChanged }) => {
  const [key, setKey] = useState("");

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
              placeholder="Search By Asset Name"
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

  const filteredAssets = fakeAssets.filter((eachAsset) =>
    eachAsset.asset_name.toLowerCase().includes(key)
  );

  return (
    <Container>
      <Card lg={8} className="shadow p-3 m-3">
        <h4 className="text-primary">Assets List</h4>

        {renderTableHeader()}
        <Table striped>
          <thead className="table-header">
            <tr>
              <th>Asset Name</th>
              <th>Purchase Date</th>
              <th>Warrenty Expiry date</th>
              <th>Serial Number</th>
              <th>Amount</th>
              <th>Invoice Number</th>
              <th>Employee ID</th>
              <th>Is Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((eachAsset) => (
              <tr key={eachAsset.asset_name}>
                <td>{eachAsset.asset_name}</td>
                <td>{eachAsset.purchase_date}</td>
                <td>{eachAsset.warranty_expire_date}</td>
                <td>{eachAsset.serial_number}</td>
                <td>{eachAsset.amount}</td>
                <td>{eachAsset.invoice_number}</td>
                <td>{eachAsset.employee_id}</td>

                <td>
                  <input type="checkbox" checked={eachAsset.is_active} />
                </td>
                <td>
                  <Button
                    color="primary"
                    onClick={() =>
                      tabChanged(tabs.ASSETS_UPDATE_FORM, eachAsset)
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

export default AssetsList;
