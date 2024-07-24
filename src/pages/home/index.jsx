import React, { Fragment, useEffect, useState } from 'react'
import { getNews } from '../../service/getNews.service'
import CardHeader from '../../element/card/CardHeader'
import paper from '../../assets/paper.jpg'
import news from '../../assets/news.jpg'
import people from '../../assets/people.jpg'
import berita from '../../assets/berita.jpg'
import koran from '../../assets/koran.jpg'
import CardBody from '../../element/card/CardBody'
import Carousel from '../../fragment/carousel/carousel'
import NewsIdn from '../../fragment/newsIdn/newsIdn'
import Navbar from '../../element/navigation'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomePage = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getNews((data) => {
      setArticles(data.articles)
      setLoading(false)
    })
  }, [])

  const FormatNewDate = (dateString) => {
    const days = [
      'Senin', 'Selasa', 'Rabu',
      'Kamis', 'Jumat', 'Sabtu', 'Minggu'
    ]

    const months = [
      'Januari', 'Februari', 'Maret', 'April',
      'Mei', 'Juni', 'Juli', 'Agustus', 'September',
      'Oktober', 'November', 'Desember'
    ]

    const date = new Date(dateString)

    const dayName = days[date.getDay()]
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${dayName}, ${day}-${month}-${year}`
  }

  const image = [
    paper,
    news,
    people,
    berita,
    koran
  ]

  const getImageRandom = () => {
    const RandomIndex = Math.floor(Math.random() * image.length)
    return image[RandomIndex]
  }
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <div className=' bg-gray-900 flex justify-center items-center'>
        <h1 className='text-5xl text-indigo-200 font-semibold m-3'>
          Top Headlines
        </h1>
      </div>
      <div className="mx-auto flex bg-gray-900">
        <div className="max-w-full mx-auto px-5 mb-3 ">
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md">
                  <Skeleton height={20} />
                  <div className="p-5">
                    <Skeleton count={3} />
                  </div>
                </div>
              ))
            ) : (
              articles.map((art, index) => (
                <div key={index} className="max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md">
                  <CardHeader url={art.url} image={art.urlToImage ? art.urlToImage : getImageRandom()} />
                  <div className="p-5">
                    <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">{FormatNewDate(art.publishedAt)}</div>
                    <CardBody url={art.url}>
                      {art.title}
                    </CardBody>
                    <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">{art.author ? art.author : 'Y-News'}</div>
                    <p className="mb-3 font-normal text-gray-700 ">{art.description ? art.description :
                      'For more information and to read the full article, please click on this page.'}</p>
                    <a href={art.url}
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white
                     bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
                     focus:ring-blue-300">
                      Read more
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                        11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              )))}
          </div>
        </div>
      </div>
      <NewsIdn />
    </Fragment>
  )
}

export default HomePage
