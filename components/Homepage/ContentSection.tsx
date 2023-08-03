import React from 'react'

export default function ContentSection() {
  return (<section className='w-full h-[200vh] sm:h-screen flex flex-col justify-between p-8'>

    <div className='w-full h-1/2 flex flex-col'>
      <div className='w-full h-[calc(100%-0.15rem)] p-8 sm:p-4 flex flex-col sm:flex-row text-center sm:text-left'>
        <div className='w-full sm:w-2/5 h-2/5 sm:h-full bg-white'>
          animations go here..
        </div>

        <div className='w-full sm:w-3/5 h-3/5 sm:h-full flex flex-col justify-center items-center gap-4'>
          <div className='w-full text-4xl font-bold px-12'>
            Effortless Sharing
          </div>
          <div className='w-full px-12'>
            In just a few clicks, transform complex web addresses into compact URLs, enhancing convenience and simplifying online sharing. Streamline your links with ease and enhance your digital experience.
          </div>
        </div>
      </div>
      <hr className='bg-black w-full h-[0.15rem]' />
    </div>


    <div className='w-full h-1/2 p-8 sm:p-4 flex flex-col sm:flex-row-reverse text-center sm:text-left'>
      <div className='w-full sm:w-2/5 h-2/5 sm:h-full bg-white'>
        animations go here..
      </div>
      <div className='w-full sm:w-3/5 h-3/5 sm:h-full flex flex-col justify-center items-center gap-4 text-center sm:text-right'>
        <div className='w-full text-4xl font-bold px-12'>
          Powerful Analytics
        </div>
        <div className='w-full px-12'>
          Unlock valuable insights with our robust analytics toolset. Dive deep into link performance, monitor click rates, and track user engagement effortlessly. Our comprehensive analytics empower informed decisions, enhance strategy refinement, and amplify your online impact.
        </div>
      </div>
    </div>
  </section>
  )
}
