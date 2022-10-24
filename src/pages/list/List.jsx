import "./list.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"

const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listCointainer">
            <Navbar />
                datatable
            </div>
        </div>
    )
}

export default List