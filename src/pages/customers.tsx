import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import { ReactElement , useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";
import TableHOC from "../components/TableHOC";


interface Datatype {
  avatar : ReactElement;
  name: string;
  gender : string;
  email : string;
  role : string;
  action: ReactElement;
}


const columns: Column<Datatype>[]=[{
  Header : "Avatar",
  accessor : "avatar",
},
{
  Header : "Name",
  accessor : "name",
},
{
  Header : "Gender",
  accessor : "gender",
},
{
  Header : "Email",
  accessor : "email",
},
{
  Header : "Role",
  accessor : "role",
},
{
  Header : "Action",
  accessor : "action",
},]

const img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F73d737005989f34abc6f1b7557933672%2F242ad8bd3ff8acb6-d9%2Fs1280x1920%2F1b56dfb5dd93ffdfaf048147f0b27cde99ddf411.png&f=1&nofb=1&ipt=7f08d83ecedff7e43703017e9eede5d5172322c6de04831477e417daacd2d00f&ipo=images";

const img2 = "https://i.pinimg.com/originals/28/5b/65/285b65f4d12204bf699fe0ed99d4b995.jpg";

const arr : Datatype[] = [
  {
    avatar: <img 
    style={{
      borderRadius: "50%",
    }}
    src={img} alt="pfp1" />,
    name: "Shiz",
    gender: "Male",
    email: "kshitiz001@gmail.com",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img 
    style={{
      borderRadius: "50%",
    }}
    src={img2} alt="pfp1" />,
    name: "Megumi",
    gender: "Male",
    email: "MegumiFushiguro@gmail.com",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  }
];

const customers = () => {

  const [data] = useState<Datatype[]>(arr);


  const Table = useCallback(TableHOC<Datatype>(
    columns,
    data, 
    "dashboard-product-box", 
    "Customers"),[])

  return (
    <div className="admin-container">
            <AdminSidebar />
            <main>{Table()}</main>
    </div>
  )
}

export default customers