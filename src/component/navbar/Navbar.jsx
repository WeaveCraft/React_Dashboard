import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
            <DarkModeIcon />
          </div>
          <div className="item">
            <FullscreenIcon />
          </div>
          <div className="item">
            <CircleNotificationsIcon />
          </div>
          <div className="item">
            <ChatIcon />
          </div>
          <div className="item">
            <ListIcon />
          </div>
        </div>
      </div>
    </div>
  )
}