import React, { useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import NavLinks from './NavLinks';
import berita from '../../assets/berita.jpg';
import koran from '../../assets/koran.jpg';
import news from '../../assets/koran.jpg';
import paper from '../../assets/paper.jpg';
import people from '../../assets/people.jpg';
import OpenMenuIcons from '../icons/openMenuIcons';
import CloseMenuIcons from '../icons/closeMenuIcons';

const MobileNav = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [newsData, setNewsData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const fetchNews = async (query) => {
        if (!query) {
            setNewsData([]);
            return;
        }
        setIsFetching(true);
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=8f60cf7e53064867a63bbad9c7f2a429`);
            setNewsData(response.data.articles);
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetching(false);
        }
    };

    const debouncedFetchNews = useCallback(_.debounce(fetchNews, 500), []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        debouncedFetchNews(query);
    };

    const handleClick = () => {
        setNavOpen(!navOpen);
    };

    const handleSeeMore = () => {
        setShowAll(true);
    };

    const image = [
        berita,
        news,
        koran,
        paper,
        people
    ];

    const getDefaultImage = () => {
        const RandomIndex = Math.floor(Math.random() * image.length);
        return image[RandomIndex];
    };

    return (
        <div>
            <button className="focus:outline-none text-indigo-200" onClick={handleClick}>
                {navOpen ? (
                    <CloseMenuIcons />  // <CloseMenuIcons />
                ) : (
                    <OpenMenuIcons />  // <BurgerMenuIcons />
                )}
            </button>
            {navOpen && (
                <div className="lg:hidden absolute top-14 left-0 right-0 bg-gray-800">
                    <ul className="flex flex-col space-y-4 p-4 text-base font-bold text-black/60">
                        <li className="flex items-center space-x-2">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 
                             5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                            <input
                                type="text"
                                className='w-full border rounded pl-2'
                                placeholder='Search your news'
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </li>
                        <NavLinks Nav='/' >Home</NavLinks>
                        <NavLinks Nav='/news.id'>Indonesia News</NavLinks>
                        <NavLinks Nav='/apple' >Apple News</NavLinks>
                        <NavLinks Nav='/crypto'>Crypto News</NavLinks>
                        {searchTerm && (
                            <div className="max-w-xl absolute top-8 left-0 right-0 bg-white shadow-lg mt-2 z-10 rounded overflow-auto max-h-64">
                                {isFetching ? (
                                    <p className="p-2 text-center">Loading...</p>
                                ) : newsData.length === 0 ? (
                                    <p className="p-2 text-center">Berita Tidak Ada</p>
                                ) : (
                                    <ul className="space-y-2 p-2">
                                        {newsData.slice(0, showAll ? newsData.length : 5).map((article, index) => (
                                            <li key={index} className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200">
                                                <img
                                                    src={article.urlToImage || getDefaultImage()}
                                                    alt={article.title}
                                                    className="w-8 h-8 object-cover rounded mr-4"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="text-md font-semibold mb-1">
                                                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                            {article.title}
                                                        </a>
                                                    </h3>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {!showAll && newsData.length > 5 && (
                                    <button
                                        onClick={handleSeeMore}
                                        className="w-full p-2 bg-blue-500 text-white rounded-b-lg hover:bg-blue-600 transition-colors duration-200"
                                    >
                                        Lihat Selengkapnya
                                    </button>
                                )}
                            </div>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNav;