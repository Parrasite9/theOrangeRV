import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Global/Footer';
import Navbar from '../Global/Navbar';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

function Description({ inventory }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsOpen(false);
  };


  console.log("ID:", id);
  console.log("Inventory:", inventory);


  // Find the specific item in the inventory based on the id
  const item = inventory.find((item) => item.id === parseInt(id));

  console.log("Item:", item);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {item ? (
          <div className="container mx-auto p-4">
            <div className="description__title text-3xl font-bold mb-4">
              <div className="condition__year__name flex">
                <h1>
                  <span className="font-normal text-lively-orange">{item.condition}</span>
                  {' • '}
                  <span className='font-light'>{item.year} {item.name}</span>
                </h1>
              </div>
              <h1>{item.model} </h1>
            </div>

            {/* CARASOUL  */}
            <div className="mb-4">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={true}
                autoPlay={true}
                stopOnHover={true}
                showStatus={false}
                className="rounded-lg shadow-lg"
              >
                {item.album.map((image, index) => (
                  <div key={index} className="h-64" onClick={() => openModal(image)}>
                    <img src={image} alt={`${item.name} ${index + 1}`} className="object-cover h-full w-full rounded-lg cursor-pointer" />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* DETAILS  */}
            <div className="rv__info mx-2">
                <div className="year__and__model flex mb-5">
                    <p className="text-lg font-semibold">{item.year}</p>
                    <h2 className="text-xl font-semibold ml-2">{item.name}</h2>
                </div>

                {/* PRICE AND SLEEPS  */}
                <div className="price__and__sleeps flex justify-between">
                    <div className="condition__and__sleeps">
                        <p className='font-semibold '>USED</p>
                        {/* <p className="text-lg">Sleeps: {item.sleeps}</p> */}
                    </div>

                    {/* PRICE AND PRICE TEXT  */}
                    <div className="price__and__priceText flex flex-col flex-end">
                        <p>Sale Price</p>
                        <p className="text-lg">${item.price}</p>
                    </div>              
                </div>

                {/* BUTTONS  */}
                <div className="offer__and__available flex justify-between mb-5">
                    <button className='bg-blue-500 text-white p-2 w-[40%]'>Confirm Availability</button>    
                    <button className='bg-fresh-green text-white p-2 w-[40%]'>Make An Offer</button>    
                </div> 

                {/* RV SPECS  */}
                <div className="rv__specs flex justify-between mx-2 text-center text-sm">
                    {/* LENGTH  */}
                    <div className="spec__data">
                        <p>Length (ft)</p>
                        <p>{item.length}</p>
                    </div>

                    {/* WEIGHT */}
                    <div className="spec__data">
                        <p>Weight (lbs)</p>
                        <p>{item.weight}</p>
                    </div>

                    {/* SLIDES  */}
                    <div className="spec__data">
                        <p>Slides</p>
                        <p>{item.slides}</p>
                    </div>   

                    {/* SLEEPS  */}
                    <div className="spec__data">
                        <p>Sleeps</p>
                        <p>{item.sleeps}</p>
                    </div>
 
                </div> 

                {/* VIEW DETAILS  */}
                <div className="details__button border rounded border-lively-orange bg-sunset-orange hover:bg-lively-orange text-white text-center p-2 my-5">
                    <Link to={`/browse/${item.id}/${item.year}/${item.type}/${item.name}`}><button>View Details</button></Link>
                </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-xl mt-8">Item not found</p>
        )}
      </div>
      <Footer />

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Full Image"
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="relative bg-white p-4 rounded-lg max-w-3xl mx-auto">
          <button onClick={closeModal} className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full p-2">
            &times;
          </button>
          <img src={selectedImage} alt="Full View" className="w-full h-full object-contain" />
        </div>
      </Modal>
    </div>
  );
}

export default Description;
