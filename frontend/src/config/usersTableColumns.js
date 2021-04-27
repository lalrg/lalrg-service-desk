import { Space } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Nombre",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Rol",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Correo electrónico",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/updateuser/${record.id}`}>Actualizar usuario</Link>
      </Space>
    ),
  },
];

export default columns