import { Space } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Rol",
    dataIndex: "place",
    key: "place",
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link to="/updateuser">Actualizar usuario</Link>
      </Space>
    ),
  },
];

export default columns