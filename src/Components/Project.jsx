import React from 'react'

const Project = ({ item }) => {
    return (
        <div  className='relative min-h-[200px] shadow-md shadow-[#505050] w-full my-3 flex flex-col items-center justify-center bg-cover overflow-hidden'>
            {/* <div className='absolute invisible group-hover:visible'>
                <button className='bg-green-500 text-black rounded-full h-[80px] w-[80px] shadow-lg'>View Project</button>
            </div> */}
            <h1 className='py-2 px-4 absolute text-[1.2rem] text-black text-center bg-green-500 rounded-full w-fit'>{item.name}</h1>
            {/* <img src={item.img} className='object-cover opacity-50' /> */}
        </div>
    )
}

export default Project
