import "./home.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import Widget from "../../component/widget/Widget"
import Chart from "../../component/chart/Chart"
import Featured from "../../component/featured/Featured"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="expenses" />
                    <Widget type="incomes" />
                    <Widget type="transactions" />
                    <Widget type="balance" />
                    <Widget type="savings" />
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
            </div>
        </div>
    )
}

export default Home