import React, { Fragment, useEffect, useState } from 'react'
import { getAppleNews } from '../../service/getNews.service'
import CardHeader from '../../element/card/CardHeader'
import CardBody from '../../element/card/CardBody'
import berita from '../../assets/berita.jpg'
import koran from '../../assets/koran.jpg'
import news from '../../assets/koran.jpg'
import paper from '../../assets/paper.jpg'
import people from '../../assets/people.jpg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AppleNews = () => {
    const [appleNews, setAppleNews] = useState([])
    const [readArticles, setReadArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getAppleNews((data) => {
            setAppleNews(data.articles)
            setLoading(false)
        })
        const saveReadArticles = JSON.parse(localStorage.getItem('Read Apples')) || []
        setReadArticles(saveReadArticles)
    }, [])

    const image = [
        berita,
        news,
        koran,
        paper,
        people
    ]

    const getDefaultImage = () => {
        const RandomIndex = Math.floor(Math.random() * image.length)
        return image[RandomIndex]
    }

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

    const handleRead = (article) => {
        const updatedReadArticles = [...readArticles]
        if (!updatedReadArticles.some(art => art.url === article.url)) {
            updatedReadArticles.push(article)
            setReadArticles(updatedReadArticles)
            localStorage.setItem('Read Apples', JSON.stringify(updatedReadArticles));
        }
        window.open(article.url, '_blank')
    }

    const checkedLocal = () => {
        return !!localStorage.getItem('Read Apples')
    }
    return (
        <Fragment>
            <div className={`bg-gray-900 flex ${checkedLocal() ? 'font-semibold py-6 px-4 text-gray-200' : 'justify-center items-center'}`}>
                <h1 className='text-2xl text-indigo-200 font-semibold mt-3'>
                    {checkedLocal() ? 'Reading History:' : 'Apple News'}
                </h1>
            </div>
            <div className="mx-auto flex bg-gray-900">
                <div className="max-w-full mx-auto px-5 mb-3 ">
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
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
                            readArticles.length > 0 && readArticles.map((art, index) => (
                            <div key={index} className="max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md">
                                <CardHeader image={art.urlToImage ? art.urlToImage : getDefaultImage()} />
                                <CardBody size='text-sm text-center'>
                                    {art.title}
                                </CardBody>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
            <div className="mx-auto flex bg-gray-900">
                <div className="max-w-full mx-auto px-5 mb-3 ">
                    <div className='bg-gray-900 flex justify-center items-center'>
                        <h1 className='text-2xl text-indigo-200 font-semibold mt-3'>
                            {checkedLocal() ? 'Apple News' : ''}
                        </h1>
                    </div>
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
                            appleNews.length > 0 && appleNews.map((art, index) => (
                            <div key={index} className="max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md">
                                <CardHeader image={art.urlToImage ? art.urlToImage : getDefaultImage()} />
                                <div className="p-5">
                                    <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">{(FormatNewDate(art.publishedAt))}</div>
                                    <CardBody>
                                        {art.title}
                                    </CardBody>
                                    <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">{art.author ? art.author : 'Y-News'}</div>
                                    <p className="mb-3 font-normal text-gray-700 ">{art.description ? art.description :
                                        'For more information and to read the full article, please click on this page.'}</p>
                                    <button
                                        onClick={() => handleRead(art)}
                                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                    >
                                        Read more
                                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AppleNews
