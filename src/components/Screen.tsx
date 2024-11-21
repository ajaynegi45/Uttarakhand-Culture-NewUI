// "use client";
//
// import { useState, useEffect } from 'react';
//
// const ScreenWidth: React.FC = () => {
//     const [screenWidth, setScreenWidth] = useState<number>(0);
//
//     useEffect(() => {
//         // Function to update the screen width
//         const updateWidth = () => setScreenWidth(window.innerWidth);
//
//         // Set the initial width
//         updateWidth();
//
//         // Add event listener to track window resize
//         window.addEventListener('resize', updateWidth);
//
//         // Cleanup event listener on component unmount
//         return () => window.removeEventListener('resize', updateWidth);
//     }, []);
//
//     return (
//         <div>
//             <h1>Screen Width: {screenWidth}px</h1>
//         </div>
//     );
// };
//
// export default ScreenWidth;
