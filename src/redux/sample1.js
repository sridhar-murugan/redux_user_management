import { useDispatch } from "react-redux";
import { addcustomer } from "./slice";
const sample1 =()=>{
    const dispatch = useDispatch();
    const handleadd =()=>{
        dispatch(addcustomer(2))
    }
    return(
        <div>
            <span>
                click add button <button onClick={()=> handleadd()}>add</button>
            </span>
        </div>
    )
}
export default sample1;