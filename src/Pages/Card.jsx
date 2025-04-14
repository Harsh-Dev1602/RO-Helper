import React from 'react'
import CardName from './CardName';
function Card() {
    
    return (
        <>
            <div className="S bg-blue-100 mx-auto mt-10 p-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {
                        CardName.map(({ id, text, img, price }) => (
                            <div key={id} className="Bg-water p-6 flex justify-center bg-white items-center flex-col gap-5">
                                <img className=' w-[250px] object-cover bg-cover h-[300px]' src={img} />
                                <h3 className="text-2xl text-center">{text}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Card