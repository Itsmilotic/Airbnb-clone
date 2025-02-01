export default function Perks({selected,onChange}) {

    function handleCbClick(ev) {
      const {checked,name} = ev.target;
      if (checked) {
        onChange([...selected,name]);
      } else {
        onChange([...selected.filter(e => e !== name)]); //remove the uncheck perk
      }
    }
    return (
      <>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
          </svg>
          <span>Wifi</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('parking')} name="parking" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <span>Free parking spot</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          <span>TV</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('radio')} name="radio" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
          <span>Radio</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('pets')} name="pets" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="paw" width="25" height="30" x="0" y="0" version="1.1" viewBox="0 0 512 512">
            <path d="M443.827 195.5c-4.383-11.73-11.753-20.212-21.317-24.524-4.389-1.975-8.995-2.976-13.688-2.976-20.025 0-40.372 18.667-50.632 46.454-12.698 34.42-5.315 68.135 17.173 78.423 4.522 2.071 9.365 3.123 14.394 3.123 20.396 0 41.126-17.119 51.581-42.596 7.9-19.283 8.83-40.927 2.489-57.904zm-17.613 50.795c-7.836 18.898-22.994 32.098-36.862 32.098-2.809 0-5.488-.569-7.968-1.694-14.121-6.394-17.862-31.059-8.518-56.152 7.775-20.817 22.448-35.355 35.683-35.355 2.51 0 4.979.533 7.34 1.588 6.88 3.067 10.622 9.712 12.551 14.745 4.91 12.807 4.078 29.543-2.226 44.77zM153.811 214.454C143.551 186.667 123.204 168 103.179 168c-4.693 0-9.3 1.001-13.689 2.976-9.565 4.312-16.934 12.794-21.317 24.524-6.341 16.977-5.411 38.621 2.49 57.904C81.118 278.881 101.848 296 122.244 296c5.028 0 9.871-1.052 14.394-3.123 22.488-10.288 29.871-44.003 17.173-78.423zm-23.195 62.244c-2.479 1.125-5.16 1.694-7.968 1.694-13.868 0-29.026-13.199-36.862-32.098-6.304-15.227-7.136-31.963-2.226-44.771 1.929-5.033 5.671-11.678 12.551-14.745 2.361-1.055 4.83-1.588 7.34-1.588 13.234 0 27.907 14.538 35.683 35.355 9.345 25.095 5.603 49.76-8.518 56.153zM198.347 210.601c1.855.081 3.727.03 5.563-.151 10.787-1.059 20.54-6.594 28.207-16.008 12.371-15.191 15.806-38.974 13.201-63.439C241.336 93.3 221.469 65.161 194.776 64c0 0-3.811.008-5.75.193-11.776 1.164-22.481 7.283-30.957 17.695-12.291 15.101-18.198 37.57-15.803 60.104 3.936 37.277 28.57 67.412 56.081 68.609zm-27.3-118.77c3.923-4.739 10.51-10.577 19.62-11.476a24.165 24.165 0 0 1 3.404-.098c18.207.792 31.859 23.271 34.936 52.428 2.146 20.15-.148 40.055-9.845 51.779-4.874 5.898-10.556 9.204-16.881 9.825a23.302 23.302 0 0 1-3.229.087c-19.257-.838-37.414-25.091-40.473-54.067-1.968-18.53 2.694-36.653 12.468-48.478zM256 240c-64 0-128 76.074-128 149.128 0 21.798 10.932 39.331 21.667 46.517C162.925 444.516 172.269 448 191.704 448c23.093 0 29.325-8.078 40.136-15.205 7.819-5.152 14.572-9.605 24.161-9.605s16.342 4.453 24.16 9.605C290.972 439.922 297.203 448 320.297 448c19.434 0 28.778-3.484 42.036-12.355C373.068 428.459 384 410.926 384 389.128 384 316.074 320 240 256 240zm97.963 180.776c-10.964 7.337-17.366 9.778-33.666 9.778-14.225 0-18.624-3.201-25.911-8.51-1.848-1.344-3.759-2.736-5.946-4.177-8.619-5.682-18.39-12.123-32.439-12.123s-23.82 6.441-32.438 12.121c-2.189 1.442-4.1 2.835-5.947 4.179-7.287 5.309-11.686 8.51-25.911 8.51-16.3 0-22.703-2.441-33.667-9.778C152.395 417 144 405.456 144 389.128c0-30.277 13.377-64.231 35.783-90.823 10.886-12.921 23.517-23.6 36.526-30.885C229.713 259.917 243.067 256 256 256c12.934 0 26.287 3.917 39.691 11.42 13.01 7.285 25.64 17.964 36.525 30.885C354.623 324.896 368 358.851 368 389.128c0 16.328-8.395 27.872-14.037 31.648zM308.281 210.265c1.836.182 3.709.232 5.563.151 27.511-1.196 52.146-31.332 56.081-68.607 2.395-22.534-3.514-45.004-15.804-60.104-8.476-10.412-18.783-16.228-30.56-17.392-1.939-.186-6.146-.312-6.146-.312-26.693 1.161-46.561 29.115-50.542 66.817-2.604 24.466.83 48.248 13.2 63.439 7.668 9.414 17.421 14.949 28.208 16.008zm-25.095-77.764c3.076-29.156 16.729-51.636 34.936-52.428a24.02 24.02 0 0 1 3.404.098c9.109.898 15.696 6.736 19.619 11.476 9.774 11.825 14.436 29.948 12.468 48.479-3.06 28.977-21.216 53.229-40.474 54.067a23.314 23.314 0 0 1-3.229-.087c-6.324-.621-12.007-3.927-16.881-9.825-9.695-11.725-11.99-31.63-9.843-51.78z"/>
          </svg>
          <span>Pets</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('entrance')} name="entrance" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          <span>Private entrance</span>
        </label>
      </>
    );
  }