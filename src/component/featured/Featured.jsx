import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Money Spent</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <CircularProgressbar value={70} text="70%" strokeWidth={6}/>
        </div>
        <p className="title">Total Purchases Made</p>
        <p className="amount">$1252</p>
        <p className="desc">Amount spent is considered above average.</p>
        <div className="summary">
          <div className="item"></div>
        </div>
      </div>
    </div>
  )
}

export default Featured