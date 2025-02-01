import { useContext } from 'react';
import { UserContext } from './../userContext';
import { Navigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import PagesPlace from './PlacesPage';
import AccountNav from '../AccountNav';
export default function AccountPage() {

    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);

    let {subpage} = useParams();
    if(subpage === undefined) subpage = 'profile';

    async function logout() {
        await axios.post('/logout');
        setRedirect('/')
        setUser(null);
    }

    if(!ready) {
        return 'Loading...';
    }

    if(!user && ready && !redirect){
        return <Navigate to={'/login'} />
    }

    if(redirect) {
        return <Navigate to={'/'} />
    }
    
    
    
    return (
        <div>
            <AccountNav />

            {subpage === 'profile' && (
                <div className="text-center mx-auto max-w-lg">
                    Logged in as {user.name} {user.email} <br />
                    <button onClick={logout} className= "primary max-w-sm mt-2" >Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <PagesPlace/>
            )}
        </div>
    )
}