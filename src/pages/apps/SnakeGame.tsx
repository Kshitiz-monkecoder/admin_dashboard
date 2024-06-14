import AdminSidebar from "../../components/AdminSidebar";
const SnakeGame = () => {

  const snake = "https://www.phoneworld.com.pk/wp-content/uploads/2017/03/Nokia-Snake-Game-640x400.png"
  return <div className="admin-container">
  <AdminSidebar />
  <main className="chart-container" >
    <img src={snake} alt="" />
    </main>
    </div>
}

export default SnakeGame