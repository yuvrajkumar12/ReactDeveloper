// import { Text } from "../Text"
// //Button Component
// export const Button = ({count, onclickincrement}) => {
//     return (
//         <>
//             <button onClick={onclickincrement}>Click to Increment</button>
//             <Text count={count} /> 
//         </>
//     );
// };
import { Text } from "../Text";

// Button Component
export const Button = ({ count, onclickincrement }) => {
  return (
    <>
      <button onClick={onclickincrement}>
        Click to Increment
      </button>

      <Text count={count} />
    </>
  );
};
