import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SavingsIcon from '@mui/icons-material/Savings';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import HotelIcon from '@mui/icons-material/Hotel';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import OpacityIcon from '@mui/icons-material/Opacity';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Favi</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                </ul>
                <ul>
                    <p className="title">Finance</p>
                    <li>
                        <AccountBalanceWalletIcon className="icon" />
                        <span>Transactions</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <SavingsIcon className="icon" />
                        <span>Savings</span>
                    </li>
                </ul>
                <ul>
                    <p className="title">Health</p>
                    <li>
                        <DirectionsRunIcon className="icon" />
                        <span>Fitness</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <FoodBankIcon className="icon" />
                        <span>Calories</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <OpacityIcon className="icon" />
                        <span>Water</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <HotelIcon className="icon" />
                        <span>Sleep</span>
                    </li>
                </ul>
                <ul>
                    <p className="title">Planning</p>
                    <li>
                        <ViewKanbanIcon className="icon" />
                        <span>Kanban</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <CalendarMonthIcon className="icon" />
                        <span>Calendar</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <TextSnippetIcon className="icon" />
                        <span>Logs</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                </ul>
                <ul>
                    <p className="title">Miscellaneous</p>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <AccountBoxIcon className="icon" />
                        <span>Profile</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}

export default Sidebar