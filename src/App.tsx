import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader"

const Dashboard = lazy(() => import("./pages/dashboard"))
const SnakeGame = lazy(()=> import("./pages/apps/SnakeGame"))
const Products = lazy(() => import("./pages/products"))
const Transaction = lazy(() => import("./pages/transaction"))
const Customers = lazy(() => import("./pages/customers"))
const NewProduct = lazy(()=> import("./pages/management/NewProduct"))
const ProductManagement = lazy(()=> import("./pages/management/ProductManagement"))
const TransactionManagement = lazy(()=> import("./pages/management/TransactionManagement"))
const BarCharts = lazy(()=> import("./pages/charts/BarCharts"));
const LineCharts = lazy(()=> import("./pages/charts/LineCharts"));
const PieCharts = lazy(()=> import("./pages/charts/PieCharts"));
const Coupon = lazy(()=> import("./pages/apps/Coupon"))



const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element= {<Dashboard />} />
          <Route path="/admin/products" element= {<Products />} />
          <Route path="/admin/transaction" element= {<Transaction />} />
          <Route path="/admin/customers" element= {<Customers />} />
        
          {/* Charts*/}
          <Route path="/admin/chart/bar" element= {<BarCharts />} />
          <Route path="/admin/chart/pie" element= {<PieCharts />} />
          <Route path="/admin/chart/line" element= {<LineCharts />} />

          {/* Apps */}
          <Route path="/admin/app/coupon" element= {<Coupon />} />
          <Route path="/admin/app/snake-game" element= {<SnakeGame />} />


          {/* Management */}
          <Route path="/admin/products/new" element={<NewProduct />} />
          <Route path="/admin/products/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
        </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App