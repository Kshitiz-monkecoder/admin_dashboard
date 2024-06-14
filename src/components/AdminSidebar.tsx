import { Link , useLocation } from "react-router-dom"
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBagFill } from "react-icons/ri"
import { AiFillFileText, AiOutlineBarChart, AiOutlineLineChart, AiOutlinePieChart } from "react-icons/ai"
import { IoIosPeople, IoLogoGameControllerB } from "react-icons/io"
import { IconType } from "react-icons"

const AdminSidebar = () => {
  return (
   <aside>
    <h2>Logo.</h2>
    <DivOne />
    <DivTwo />
    <DivThree />
    
   </aside>
  )
}

const DivOne = () => (
    <div>
        <h5>Dashboard</h5>
        <ul>
        <Li text="Dashboard" 
        url="/" 
        Icon={RiDashboardFill} 
        location={location} />

        <Li text="Products" 
        url="/admin/products" 
        Icon={RiShoppingBagFill} 
        location={location} />

        
        <Li text="Customer" 
        url="/admin/customers" 
        Icon={IoIosPeople} 
        location={location} />


        <Li text="Transaction" 
        url="/admin/transaction" 
        Icon={AiFillFileText} 
        location={location} />
        </ul>
    </div>
)
const DivTwo = () => (
    <div>
        <h5>Charts</h5>
        <ul>
        <Li text="Bar" 
        url="/admin/chart/bar" 
        Icon={AiOutlineBarChart} 
        location={location} />

        <Li text="Pie" 
        url="/admin/chart/pie" 
        Icon={AiOutlinePieChart } 
        location={location} />

        
        <Li text="Line" 
        url="/admin/chart/Line" 
        Icon={AiOutlineLineChart } 
        location={location} />

        </ul>
    </div>
    
)

const DivThree =  () => (
    <div>
        <h5>Apps</h5>
        <ul>
            
        <Li text="Coupon" 
        url="/admin/app/coupon" 
        Icon={RiCoupon3Fill} 
        location={location} />


        <Li text="Snake Game" 
        url="/admin/app/snake-game" 
        Icon={IoLogoGameControllerB} 
        location={location} />

        </ul>
    </div>
)

interface LiProps {
    url:string,
    text:string,
    location:unknown,
    Icon:IconType
}

const Li = ({url,text,Icon}: LiProps) =>
{
    const location = useLocation();
    return(
    
    <li style={{
        backgroundColor:location.pathname.includes(url)
         ? "rgba(0,115,255,0.1)" 
         : "white",
    }
    }>
        <Link 
        to={url}
        style={{
            color:location.pathname.includes(url)
             ? "rgba(0,115,255)" 
             : "black", }} >
                <Icon />
            {text}
        </Link>
        </li>
)};

export default AdminSidebar