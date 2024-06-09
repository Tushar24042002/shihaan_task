import React from 'react'
import ServiceBox from './ServiceBox/ServiceBox'
import { data } from './ServiceBox/data'

const Service = () => {
  return (
    <section className='serviceDetails px-md-0 px-lg-0 px-2'>
        <div className='container px-md-5  px-4'>
            <div className='row my-5'>
              {data?.map((e, index)=>{
                return(
                  <ServiceBox data={e} countIndex={index} isNextPresent={e?.isNextPresent}/>
                )
              })}
            </div>
        </div>
    </section>
  )
}

export default Service