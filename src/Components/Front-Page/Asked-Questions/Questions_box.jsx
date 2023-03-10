import React, { useState } from 'react'
import './Questions.css'
const Questions_box = ({ Questions, Answers }) => {

    const [view, setView] = useState(false);

    const yourAns = () => {
        setView(!view)
    }

    return (
        <div className='Main_box'>
            <div className='ask' onClick={yourAns}>
                <div className='ask_Q'>{Questions}</div>
                <div className='plus'><i class="fa-solid fa-plus"></i></div>
            </div>
            <div className={view ? "Ans" : "AnsClose"}>
                {Answers}
            </div>
        </div>
    )
}

export default Questions_box
