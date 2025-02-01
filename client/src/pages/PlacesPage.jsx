import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import PlacesFormPage from './PlacesFormPage';
import AccountNav from '../AccountNav';
import axios from 'axios';

export default function PlacesPage() {
    const {id} = useParams();

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
            setPlaces(data);
        })
    }, []);
    
    return (
        <>
            <AccountNav />
                <div className="flex items-center justify-center">
                    
                    
                    <Link 
                        to={'/account/places/new'} 
                        className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="size-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 4.5v15m7.5-7.5h-15" 
                            />
                        </svg>
                        Add new places
                    </Link>
                </div>
                <div className="mt-4">
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/'+place._id} key={place._id} className="flex gap-4 bg-gray-100 p-4 rounded-2xl mb-5">
                    <div className=" bg-gray-300 shrink-0 rounded-2xl w-64 h-32 ">
                        {place.photos.length > 0 && (
                            <img className="object-cover w-full h-full flex rounded-2xl" src={'http://localhost:4000/uploads/'+place.photos[0]} alt="" />
                        )}
                    </div>
                    <div className="grow-0 shrink">
                        <h2 className="text-xl">{place.title}</h2>
                        <p className="text-sm mt-2">{place.description}</p>
                    </div>
                    </Link>
                ))}
                </div>


        </>
    );
}
