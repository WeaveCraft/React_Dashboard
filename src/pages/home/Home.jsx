import "./home.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                Home Container
                </div>
        </div>
    )
}

export default Home