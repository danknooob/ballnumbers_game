import React ,{Component} from "react";
import './lottery.css';
class Lottery extends Component{
    render(){
        return(
            <>
            <div className="lotteryballs">{this.props.nums}</div>
            </>
        )
    }
}
export default Lottery;