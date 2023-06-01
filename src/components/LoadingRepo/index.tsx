import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoadingRepo = () => {
    const loadCount = [];

    for (let i = 0; i < 12; i++) {
        loadCount.push(i);
    }

    return (
        <>
            {
                loadCount.map((index) => (
                    <div key={index} className='repo'>
                        <Skeleton />
                    </div>
                ))
            }
        </>
    )
}

export default LoadingRepo