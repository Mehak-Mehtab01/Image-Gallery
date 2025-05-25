import React from 'react';
import "./App.css"
import Masonry from 'react-masonry-css';
import img1 from "./assets/img1 (1).jpg";
import img2 from "./assets/img1 (2).jpg";
import img3 from "./assets/img1 (3).jpg";
import img4 from "./assets/img1 (4).jpg";
import img5 from "./assets/img1 (5).jpg";
import img6 from "./assets/img1 (6).jpg";
import img7 from "./assets/img1 (7).jpg";
import img8 from "./assets/img1 (8).jpg";
import img9 from "./assets/img1 (9).jpg";
import img10 from "./assets/img1 (10).jpg";
import img11 from "./assets/img1 (11).jpg";
import img12 from "./assets/img1 (12).jpg";
import img13 from "./assets/img1 (13).jpg";
import img14 from "./assets/img1 (14).jpg";


const screenSizes= {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const App = () => {
  return (
    <div>
      <h2 className="text-center p-10 text-3xl font-bold">Image Gallery!</h2>
      <div className="p-5">
       <Masonry
  breakpointCols={screenSizes}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
>
  <img src={img1} alt="Gallery 1" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img2} alt="Gallery 2" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img3} alt="Gallery 3" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img4} alt="Gallery 4" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img5} alt="Gallery 5" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img6} alt="Gallery 6" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img7} alt="Gallery 7" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img8} alt="Gallery 8" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img9} alt="Gallery 9" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img10} alt="Gallery 10" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img11} alt="Gallery 11" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img12} alt="Gallery 12" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img13} alt="Gallery 13" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
  <img src={img14} alt="Gallery 14" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover"
   />
   <img src={img4} alt="Gallery 4" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
   <img src={img1} alt="Gallery 4" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />
   <img src={img2} alt="Gallery 4" className="w-full rounded-lg shadow-md mb-4 hover:scale-105 transition duration-300 object-cover" />

</Masonry>

      </div>
    </div>
  );
};

export default App;
