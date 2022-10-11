import "./home.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import Widget from "../../component/widget/Widget"

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
            </div>
        </div>
    )
}

export default Home