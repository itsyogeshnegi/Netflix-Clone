import React from 'react'
import './StepOne.css'
const StepOne = () => {
    return (
        <div className='step_one'>
            <div className='step_logo'><img src='/Netflix_logo1.png' /></div>
            <div className='plans'>
                <div className='plans_inside'><i class="fa-regular fa-circle-check"></i></div>
                <div className='plans_inside1'>
                    <p>STEP 1 OF 3</p>
                    <h2>Choose your plan.</h2>
                </div>
                <div className='plans_inside2'>
                    <div className='planIcon'><i class="fa-solid fa-check"></i></div>
                    <div className='planCommits'><p>No commitments, cancel anytime.</p></div>
                </div>


                <div className='plans_inside2'>
                    <div className='planIcon'><i class="fa-solid fa-check"></i></div>
                    <div className='planCommits'><p>Everything on Netflix for one low price.</p></div>
                </div>

                <div className='plans_inside2'>
                    <div className='planIcon'><i class="fa-solid fa-check"></i></div>
                    <div className='planCommits'><p>No ads and no extra fees. Ever.</p></div>
                </div>


            </div>
        </div>
    )
}

export default StepOne
