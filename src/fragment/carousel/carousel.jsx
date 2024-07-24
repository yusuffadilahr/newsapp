import React from 'react'
import paper from '../../assets/paper.jpg'

const Carousel = () => {
    return (
        <div className=' text-indigo-200 body-font bg-gray-900'>
            <section className="text-indigo-200 body-font bg-gray-900">
                    <div className="mx-auto flex px-10 md:flex-row flex-col items-center jobcard">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
                             md:text-left mb-16 md:mb-0 items-center">
                            <figure className="visible">
                                <div className="">
                                    <div className="pt-10 px-2 sm:px-6">
                                        <span className="inline-block py-1 px-2 rounded-full bg-green-600 text-white 
                                         text-xs font-bold tracking-widest mb-2">News App</span>
                                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Real-Time Updates, Real News
                                        </h1>
                                        <p className="text-indigo-200 text-base pb-6 text-justify">
                                            Stay up-to-date with the latest news and detailed information on key topics. Our news app offers current updates and
                                            comprehensive analysis to ensure you always have the most recent information. Explore the latest headlines and
                                            discover the news that matters most to you.
                                        </p>
                                        <p className="text-indigo-200 text-base pb-8 text-justify">
                                            Our news app delivers engaging content from around the globe, giving you access to the latest information and in-depth analysis.
                                            Click to read more and never miss out on the major stories making headlines.
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center pb-12">
                                                <div className="h-12 w-12">
                                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrtT22KR9A1r0mjDyvvqAmMHMiEoCN4mCIg&s' alt='People'
                                                        className="h-full w-full object-cover overflow-hidden rounded-full" />
                                                </div>
                                                <span className="text-indigo-200 text-base font-light ml-3">By</span>
                                                <p className="text-indigo-200 font-bold ml-3">
                                                    Yusuf Fadilah Rukmana <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
                            <img className="object-cover object-center rounded" alt="hero" src={paper} />
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Carousel
