// "use client";

// import { useEffect } from 'react';

// // Extend the Window interface to include the dataLayer property
// declare global {
//   interface Window {
//     dataLayer: any[];
//   }
// }

// const GTMLoader = () => {
//   useEffect(() => {
//     const loadGTM = () => {
//       const gtmScript = document.createElement('script');
//       gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=GTM-MDHZZM9M`;
//       gtmScript.async = true;
//       document.body.appendChild(gtmScript);

//       window.dataLayer = window.dataLayer || [];
//       window.dataLayer.push({
//         'gtm.start': new Date().getTime(),
//         event: 'gtm.js'
//       });
//     };

//     window.addEventListener('load', loadGTM);

//     return () => {
//       window.removeEventListener('load', loadGTM);
//     };
//   }, []);

//   return null;
// };

// export default GTMLoader;