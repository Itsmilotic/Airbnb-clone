import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function IndexPage() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/places').then(res => {
            setPlaces(res.data); // Duplicating data for demonstration
        }).catch(err => {
            console.error('Error fetching places:', err);
        });
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(price);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 gap-y-8 mt-8">
            {places.length > 0 ? (
                places.map(place => (
                    <Link 
                        to={'/place/'+place._id}
                        key={place._id} 
                        className="rounded-lg overflow-hidden transition-transform transform hover:scale-105 "
                    >
                        {place.photos?.[0] && (
                            <img 
                                src={`http://localhost:4000/uploads/${place.photos[0]}`} 
                                alt={place.title} 
                                className="w-full h-56 object-cover rounded-lg"
                            />
                        )}
                        <div className="pt-4 pb-4">
                            <h3 className="font-bold text-base text-black">{place.address}</h3>
                            <h2 className="text-sm text-gray-600 truncate">{place.title}</h2>
                            <div className="text-base font-semibold mt-1">
                                ₹{formatPrice(place.price)} <span className="text-black-500 font-normal">night</span>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p className="text-center text-gray-500 text-lg">No places found.</p>
            )}
        </div>
    );
}
