import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Favi</span>
            </div>
            <div className="center">
                <ul>
                    <li><span>Dashboard</span></li>
                </ul>
                <ul>
                    <li><span>Dashboard</span></li>
                </ul>
                <ul>
                    <li><span>Dashboard</span></li>
                </ul>
                <ul>
                    <li><span>Dashboard</span></li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}

export default Sidebar