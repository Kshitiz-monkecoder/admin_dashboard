import { ReactElement, useCallback } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { Column } from "react-table";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";



interface Datatype {
  photo : ReactElement;
  name : string;
  price : number;
  stock : number;
  action: ReactElement;
}


const columns: Column<Datatype>[]=[{
  Header : "Photo",
  accessor : "photo",
},
{
  Header : "Name",
  accessor : "name",
},
{
  Header : "Price",
  accessor : "price",
},
{
  Header : "Stock",
  accessor : "stock",
},
{
  Header : "Action",
  accessor : "action",
},]

const img = "https://www.pngmart.com/files/22/Grand-Theft-Auto-San-Andreas-Logo-PNG-Picture.png";


const img2 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677af80a-4f37-4a8c-8228-1dc57a31cf6f/dexrvci-ffd85103-0130-4f12-9a6c-ee20382633ca.png/v1/fit/w_500,h_500/god_of_war_desktop_icon_by_jolu42_dexrvci-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvNjc3YWY4MGEtNGYzNy00YThjLTgyMjgtMWRjNTdhMzFjZjZmXC9kZXhydmNpLWZmZDg1MTAzLTAxMzAtNGYxMi05YTZjLWVlMjAzODI2MzNjYS5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fv5xj4vmEAFo_WlgLrYX81DkJ-n7zpiHybd7KYpMVQU"

const arr:Datatype[] = [
{
      photo: <img src={img} alt="Shoes" />,
      name: "Grand Theft Auto Game",
      price: 690,
      stock: 3,
      action: 
      <Link to="/admin/products/sdaskdnkasjdn">Manage</Link>,
},
{
  photo: <img src={img2} alt="Shoes" />,
  name: "God of War",
  price: 850,
  stock: 2,
  action: 
  <Link to="/admin/products/sdaskdnkasjdn">Manage</Link>,
}
  
]

const products = () => {

  const [data] = useState<Datatype[]>(arr)

  const Table = useCallback(TableHOC<Datatype>(columns,data, "dashboard-product-box", "Products"),[])
  return (
    <div className="admin-container">
            <AdminSidebar />
            <main>{Table()}</main>
            <Link to="/admin/products/new" className="create-product-btn"><FaPlus/></Link>
    </div>
  )
}

export default products