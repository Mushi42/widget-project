import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';

function Ads({handleClick}) {
    return (
        <div className='ads' style={{height: 180,borderTop: "1px solid #e5e5e5"}}>
            <AiOutlineArrowUp style={{fontSize: 20}} onClick={event => handleClick('DisBlock', 'DisNone')} />
            <h2>ads</h2>
        </div>
    )
}

export default Ads