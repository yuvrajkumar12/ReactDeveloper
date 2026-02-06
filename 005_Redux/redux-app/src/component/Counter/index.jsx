import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../../slices/counterSlice';
export const Counter = () => {
    const dispatch=useDispatch();
    const {count} =useSelector(state=>state.counter);
    const onupClick=()=>{
        dispatch(increment());
    }
    const onDownClick=()=>{
        dispatch(decrement());

    }
    return (
        <>
            <button onClick={onupClick}>Up</button>
            <span>{count}</span>
            <button onClick={onDownClick}>Down</button>
        </>
    )
}