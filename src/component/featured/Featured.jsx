import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

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
        <p className="amount">$2.252</p>
        <p className="desc">Amount spent is considered above average.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Maximum</div>
            <div className="itemResult negative">
              <SentimentVeryDissatisfiedIcon fontSize="small" />
              <div className="resultAmount">$2.750</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Average</div>
            <div className="itemResult">
              <SentimentSatisfiedIcon fontSize="small" />
              <div className="resultAmount">$2.150</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Low</div>
            <div className="itemResult positive">
              <SentimentSatisfiedAltIcon fontSize="small" />
              <div className="resultAmount">$1.500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured