// import React, { useState, useEffect, useTransition } from 'react';
//  const ImageList = () => {
// //  function ImageList() {
//   const [images, setImages] = useState([]);
//   const [startTransition, isPending] = useTransition({
//     timeoutMs: 3000, // זמן מעבר למצב הטעינה
//   });

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//         const data = await response.json();
//         startTransition(() => {
//           setImages(data);
//         });
//       } catch (error) {
//         console.log('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, [startTransition]);

//   return (
//     <>
//     <div>
//       <button disabled={isPending}>הצג תמונות</button>
//       {isPending ? (<div>טוען תמונות...</div>) :
//        (
//         <ul>
//           {images.map((image) => (
//             <li key={image.id}>
//               <img src={image.thumbnailUrl} alt={image.title} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>


// </>
//   );
// }
// //  }
// export default ImageList;













// הקוד התקין!!

import React, { useState, useEffect } from 'react';
import Loading from './Loding';
import './ImageList'

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      setImages(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <button disabled={isLoading} onClick={fetchImages}>
          הצג תמונות
        </button>
        {isLoading ? <div> <h1>הטעינה מתבצעת...</h1></div> : null}
        {error ? <div>שגיאה: {error}</div> : null}
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.thumbnailUrl} alt={image.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

 export default ImageList;






// import React, { useState, useEffect, Suspense, useTransition } from 'react';
// import Loading from './Loading';
// import './ImageList'

// const ImageList = () => {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchImages = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//       if (!response.ok) {
//         throw new Error('Failed to fetch images');
//       }
//       const data = await response.json();
//       setImages(data);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const [startTransition, isPending] = useTransition();

//   useEffect(() => {
//     startTransition(() => {
//       fetchImages();
//     });
//   }, [startTransition]);

//   return (
//     <>
//       <div>
//         <button disabled={isLoading || isPending} onClick={fetchImages}>
//           הצג תמונות
//         </button>
//         {isLoading || isPending ? <div> <Loading/></div> : null}
//         {error ? <div>שגיאה: {error}</div> : null}
//         <ul>
//           {images.map((image) => (
//             <li key={image.id}>
//               <img src={image.thumbnailUrl} alt={image.title} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ImageList />
//     </Suspense>
//   );
// };

// export default App;
