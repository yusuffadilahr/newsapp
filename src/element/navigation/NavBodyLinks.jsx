import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import berita from '../../assets/berita.jpg';
import koran from '../../assets/koran.jpg';
import news from '../../assets/koran.jpg';
import paper from '../../assets/paper.jpg';
import people from '../../assets/people.jpg';
import SearchIcons from '../icons/searchIcons';

const NavBodyLinks = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [newsData, setNewsData] = useState([]);
    const [displayedNews, setDisplayedNews] = useState([]);
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
            setDisplayedNews(response.data.articles.slice(0, 2));
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

    const handleSeeMore = () => {
        setShowAll(true);
        setDisplayedNews(newsData);
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
        <div className='ml-32 hidden lg:block mr-10 items-center'>
            <ul className="flex space-x-10 text-base font-bold text-black/60">
                <li className="text-indigo-200 hover:text-gray-400">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-indigo-200 hover:text-gray-400">
                    <Link to="/news.id">Indonesia News</Link>
                </li>
                <li className="text-indigo-200 hover:text-gray-400">
                    <Link to="/apple">Apple News</Link>
                </li>
                <li className="text-indigo-200 hover:text-gray-400">
                    <Link to="/crypto">Crypto News</Link>
                </li>
                <li className="relative flex items-center">
                    <SearchIcons />
                    <input
                        type="text"
                        className='w-full border rounded pl-2'
                        placeholder='Search your news'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {searchTerm && (
                        <div className="absolute top-full left-0 w-full max-w-xl bg-white shadow-lg mt-2 z-10 rounded overflow-auto">
                            {isFetching ? (
                                <p className="p-2 text-center">Loading...</p>
                            ) : newsData.length === 0 ? (
                                <p className="p-2 text-center">Berita Tidak Ada</p>
                            ) : (
                                <>
                                    <ul className="space-y-2 p-2">
                                        {displayedNews.map((article, index) => (
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
                                    {!showAll && newsData.length > 5 && (
                                        <button
                                            onClick={handleSeeMore}
                                            className="w-full p-2 bg-blue-500 text-white rounded-b-lg hover:bg-blue-600 transition-colors duration-200"
                                        >
                                            Lihat Selengkapnya
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default NavBodyLinks;