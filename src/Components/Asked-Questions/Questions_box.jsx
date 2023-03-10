import React, { useState } from 'react'
import './Questions.css'
const Questions_box = ({ Questions, Answers }) => {

    const [view, setView] = useState(true);
    const [icon, setIcon] = useState(false);
    const [plusIcon, setPlusIcon] = useState(false)
    const yourAns = () => {
        setView(!view)
        setIcon(!icon)
        setPlusIcon(!plusIcon)
    }

    return (
        <div className='Main_box'>
            <div className='ask' onClick={yourAns}>
                <div className='ask_Q'>{Questions}</div>
                <div className={`plus ${view ? "" : "plus_rotate"}`}><i class={`fa-solid fa-xmark`}></i>
                </div>
            </div>
            <div className={`Ans ${view ? "" : "ansopen"}`}>
                {Answers}
            </div>
        </div>
    )
}

export default Questions_box
