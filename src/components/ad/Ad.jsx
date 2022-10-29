import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';

function Ad({handleClick}) {

    return (
        <div className="ads flexCenter GG-10" style={{ width: 180 }}>
            <AiOutlineArrowDown style={{fontSize: 20}}onClick={event => handleClick('DisBlock','DisNone')} />
            <h2 style={{marginBottom: 0}}>Ads</h2>
        </div>
    )
}

export default Ad