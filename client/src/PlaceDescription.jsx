import { useState, useEffect } from 'react';

export default function PlaceDescription({ description }) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    useEffect(() => {
        if (showFullDescription) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up when component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showFullDescription]);

    return (
        <div>
            {!showFullDescription ? (
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-gray-700 mt-6">
                        {description.length > 200 ? description.slice(0, 200) + '...' : description}
                    </p>
                    {description.length > 200 && (
                        <button
                            onClick={toggleDescription}
                            className="font-semibold mt-3 flex gap-1 text-black-500 items-center underline bg-white "
                        >
                            Show more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    )}
                </div>
            ) : (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white w-[90%] h-[90%] p-8 overflow-y-auto rounded-lg shadow-lg relative">
                        <button
                            onClick={toggleDescription}
                            className="bg-white mb-6 relative right-1.5 hover:brightness-90 rounded-full p-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h1 className="text-2xl font-bold mb-4">About this space</h1>
                        <p className="text-gray-700 whitespace-pre-line">{description}</p>
                    </div>
                </div>

            )}
        </div>
    );
}
