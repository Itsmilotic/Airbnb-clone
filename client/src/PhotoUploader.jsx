import axios from 'axios';
import { useState } from 'react';


export default function PhotoUploader({addedPhotos, onChange}) {
    const [photoLink, setPhotoLink] = useState('')

    async function addPhotoByLink( e ) {
        e.preventDefault();
        const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
        onChange(prev => {
            return [...prev, filename] //spread and add new pic
        })
        setPhotoLink('');
    }

    function removePhoto(filename) {
        onChange([...addedPhotos.filter(photo => photo !== filename)]);
    }

    function selectMainPhoto(filename) {
        onChange([filename,...addedPhotos.filter(photo => photo !== filename)]);
    }
    return(
        <>
            <div className="flex gap-2">
                <input value={photoLink}
                            onChange={e => setPhotoLink(e.target.value)}
                        type="text" placeholder="link"
                    />
                    <button onClick={addPhotoByLink} className=" text-white min-w-10 rounded-2xl bg-primary" >add picture</button>
            </div>

            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
    {addedPhotos.length > 0 && addedPhotos.map(link => (
        <div className="h-32 flex relative" key={link}>
            <img
                className="rounded-2xl w-full object-cover"
                src={`http://localhost:4000/uploads/${link}`}
                alt="error loading image"
            />
            <div
                className="absolute bottom-2 right-2 text-white bg-black/50 p-1 rounded-full cursor-pointer"
                onClick={() => removePhoto(link)}
            >
                <svg
                    className="size-6 transform transition-transform duration-200 hover:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div
                className="absolute bottom-2 left-2 text-white bg-black/50 p-0.5 rounded-lg cursor-pointer"
                onClick={() => selectMainPhoto(link)}
            >   
                {link === addedPhotos[0] && (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 transform transition-transform duration-200 hover:scale-125"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                    />
                </svg>
                )}
                {link !== addedPhotos[0] && (
                    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 transform transition-transform duration-200 hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                )}
                    

            </div>
        </div>
    ))}
</div>

        </>
    )
}