import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import {useContext} from 'react';
// import { UserContext } from './../userContext';
import PlaceDescription from './../PlaceDescription';
import BookingWidget from './../BookingWidget';

export default function PlacePage() {
    const {id}= useParams();
    const [place,setPlace] = useState(null);
    const [allPhotos, setAllPhotos] = useState(false)
    // const {user} = useContext(UserContext);

    useEffect(() => {
        if(!id) return;

        axios.get(`/places/${id}`).then(res => {
            setPlace(res.data);
        })
    }, [id])

    if (!place) {
        return <div>Loading...</div>; 
    }

    if (allPhotos) {
        return (
            <div className="fixed bg-white inset-0 z-50 p-4 overflow-y-auto">
                <button
                    onClick={() => setAllPhotos(false)}
                    className="rounded-full p-1 bg-white hover:brightness-90"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </button>
                <div className="mt-6 ml-5 mr-5">
                    <h1 className="text-xl font-bold text-gray-800" >Photo tour</h1>
                    <div className=" mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {place?.photos?.map((photo, index) => (
                            <img
                                key={index}
                                src={`http://localhost:4000/uploads/${photo}`}
                                alt={`Photo ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    return(
        <div className="mt-4 bg-white-100 -mx-8 px-8 py-8" >
           <h1 className="text-3xl">
            {place.title}
           </h1>
           <a className="font-semibold underline flex gap-1 my-3" target="_blank" href={'https://maps.google.com/?q='+place.address}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

           {place.address}</a>

            <div className="relative ">
                <div className="grid gap-2 grid-cols-[2fr_1fr] mt-4 overflow-hidden">
                    {place.photos?.[0] && (
                        <img 
                            src={'http://localhost:4000/uploads/' + place.photos[0]} 
                            alt="Main" 
                            className=" w-full h-full object-cover rounded-l-md row-span-2 hover:filter hover:brightness-75"
                        />
                    )}
                    {place.photos?.[1] && (
                        <img 
                            src={'http://localhost:4000/uploads/' + place.photos[1]} 
                            alt="Secondary 1" 
                            className="w-full h-full object-cover rounded-r-md  hover:filter hover:brightness-75"
                        />
                    )}
                    {place.photos?.[2] && (
                        <img 
                            src={'http://localhost:4000/uploads/' + place.photos[2]} 
                            alt="Secondary 2" 
                            className="w-full h-full object-cover rounded-r-md hover:filter hover:brightness-75"
                        />
                    )}
                </div>
                <button onClick={() => setAllPhotos(true)} className="font-semibold items-center flex gap-2 absolute bottom-2 right-2 py-1 px-4 bg-white rounded-xl border border-black hover:filter hover:brightness-45">
                <svg
                    style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                    ></path>
                </svg>

                    Show all photos
                </button>
            </div>
            {/*hosted by */}
            <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        
                <div>
                    <PlaceDescription description={place.extraInfo} />
                    <div className="font-semibold text-gray-800 mt-8 border-b pb-5">
                        <h1 className="font-semibold text-2xl mb-5">Things to know</h1>
                        Check-in: {place.checkIn}<br />
                        Check-out: {place.checkOut}<br />
                        {place.maxGuests} guests maximum
                    </div>
                    <div>

                    </div>
                </div>

                {/* Right Column Sticky*/}
                <div className="sticky top-8">
                    <BookingWidget place={place} />
                    <a
                        href="#"
                        className="flex items-center justify-center mt-4 text-gray-500 font-semibold underline gap-5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Report this listing
                    </a>
                </div>
            </div>

        </div>
            
        

        
    )
}