import React from 'react';

const SkeletonLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-lg shadow-md p-4 animate-pulse w-full max-w-md">
                <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
                <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
            </div>
            <p className="mt-4 text-gray-600">Loading, please wait...</p>
        </div>
    );
};

export default SkeletonLoading;