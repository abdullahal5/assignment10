import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai"
const Star = ({star}) => {
    // console.log(star)
    const ratingStar =  Array.from({length: 5}, (elem, index) =>{
        let number = index + 0.5
  return (
    <div key={index}>
      {star >= index + 1 ? (
        <FaStar style={{ color: "gold" }}></FaStar>
      ) : star >= number ? (
        <FaStarHalfAlt style={{ color: "gold" }}></FaStarHalfAlt>
      ) : (
        <AiOutlineStar style={{ color: "gold" }}></AiOutlineStar>
      )}
    </div>
  );
    })
    return (
        <div className='icon-style  flex'>
            {ratingStar}
        </div>
    );
};

export default Star;