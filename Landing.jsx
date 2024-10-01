import React, { useEffect, useState } from 'react';
import './Landing.css';

// Importing local images for the first gallery
import photo1 from './components/pic1 (1).jpeg';
import photo2 from './components/pic1 (2).jpeg';
import photo3 from './components/pic1 (3).jpeg';
import photo4 from './components/pic1 (4).jpeg';
import photo5 from './components/pic1 (5).jpeg';
import photo6 from './components/pic 2 (1).jpeg';
import photo7 from './components/pic 2 (2).jpeg';
import photo8 from './components/pic 2 (3).jpeg';
import photo9 from './components/pic 2 (4).jpeg';
import photo10 from './components/pic 2 (5).jpeg';
import photo11 from './components/pic 2 (6).jpeg';
import photo12 from './components/pic 2 (7).jpeg';
import photo13 from './components/pic 2 (8).jpeg';
import photo14 from './components/pic 2 (9).jpeg';
import photo15 from './components/pic 2 (10).jpeg';
import photo16 from './components/pic 2 (11).jpeg';
import photo17 from './components/Elephant Feeding.jpg';
import photo18 from './components/Deer.jpg';
import photo19 from './components/Tiger (3).jpg';
import photo20 from './components/Singlika.jpg';
import photo21 from './components/Peacock.jpg';
import photo22 from './components/Leopard.jpg';
import photo23 from './components/IMG_7789.jpg';
import photo24 from './components/IMG_7100.jpg';
import photo25 from './components/IMG_3706.jpg';

// Placeholder images for the second gallery
import placeholder1 from './components/LalBaug Cha Raja.jpg';
import placeholder2 from './components/IMG_3741 (1).jpg';
import placeholder3 from './components/IMG_3742.jpg';
import placeholder4 from './components/IMG_3770.jpg';
import placeholder5 from './components/IMG_3816 - Copy.jpg';
import placeholder6 from './components/IMG_4390.jpg';
import placeholder7 from './components/IMG_4406.jpg';
import placeholder8 from './components/IMG_4480.jpg';
import placeholder9 from './components/IMG_4498.jpg';
import placeholder10 from './components/IMG_4555.jpg';
import placeholder11 from './components/IMG_4752.jpg';
import placeholder12 from './components/IMG_5853 (1).jpg';
import placeholder13 from './components/IMG_5900.jpg';
import placeholder14 from './components/IMG_6850.jpg';


const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexSecondGallery, setCurrentIndexSecondGallery] = useState(0); // For second gallery
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { src: photo1, title: 'Roaring Tiger', category: 'Tiger' },
    { src: photo2, title: 'Sunset', category: 'Sunset' },
    { src: photo3, title: 'Dasara', category: 'Dasara' },
    { src: photo4, title: 'Tiger walk', category: 'Tiger' },
    { src: photo5, title: 'Dasara', category: 'Dasara' },
    { src: photo6, title: 'Dasara', category: 'Dasara' },
    { src: photo7, title: 'Dasara', category: 'Dasara' },
    { src: photo8, title: 'Dasara', category: 'Dasara' },
    { src: photo9, title: 'Dasara', category: 'Dasara' },
    { src: photo10, title: 'Dasara', category: 'Dasara' },
    { src: photo11, title: 'Dasara', category: 'Dasara' },
    { src: photo12, title: 'Dasara', category: 'Dasara' },
    { src: photo13, title: 'Dasara', category: 'Dasara' },
    { src: photo14, title: 'Dasara', category: 'Dasara' },
    { src: photo15, title: 'Dasara', category: 'Dasara' },
    { src: photo16, title: 'Dasara', category: 'Dasara' },
    { src: photo17, title: 'Dasara', category: 'Elephant feeding' },
    { src: photo18, title: 'Dasara', category: 'Deer' },
    { src: photo19, title: 'Dasara', category: 'Tiger' },
    { src: photo20, title: 'Dasara', category: 'Singlika' },
    { src: photo21, title: 'Dasara', category: 'Peacock' },
    { src: photo22, title: 'Dasara', category: 'Leapord' },
    { src: photo23, title: 'Dasara', category: 'Sleeping Pup' },
    { src: photo24, title: 'Dasara', category: 'Elephant Salute' },
    { src: photo25, title: 'Dasara', category: 'Beach' },
    
  ];

  // Placeholder photos for the second gallery
  const secondGalleryPhotos = [
    { src: placeholder1, title: 'Lalbaug Cha Raja' },
    { src: placeholder2, title: 'Sunset' },
    { src: placeholder3, title: 'Sunset' },
    { src: placeholder4, title: 'Beach' },
    { src: placeholder5, title: 'Religious place' },
    { src: placeholder6, title: 'Helicopter' },
    { src: placeholder7, title: 'Animals' },
    { src: placeholder8, title: 'Sloth bear' },
    { src: placeholder9, title: 'Lion' },
    { src: placeholder10, title: 'Roaring Tiger' },
    { src: placeholder11, title: 'Lions' },
    { src: placeholder12, title: 'Moon' },
    { src: placeholder13, title: 'Dasara' },
    { src: placeholder14, title: 'Palace' },
  ];

  // Auto-scroll logic for first gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  // Auto-scroll logic for second gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexSecondGallery((prevIndex) => (prevIndex + 1) % secondGalleryPhotos.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [secondGalleryPhotos.length]);

  // Handle left and right scroll buttons for first gallery
  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // Handle left and right scroll buttons for second gallery
  const scrollLeftSecondGallery = () => {
    setCurrentIndexSecondGallery((prevIndex) =>
      prevIndex === 0 ? secondGalleryPhotos.length - 1 : prevIndex - 1
    );
  };

  const scrollRightSecondGallery = () => {
    setCurrentIndexSecondGallery((prevIndex) => (prevIndex + 1) % secondGalleryPhotos.length);
  };

  // Open modal with full-sized image
  const openModal = (photo) => {
    setSelectedImage(photo);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  // Download the image
  const downloadImage = (imageSrc) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.substring(imageSrc.lastIndexOf('/') + 1); // Download as the image file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate the percentage to translate each photo for the first gallery
  const getTranslateX = () => {
    const cardWidth = 300; // Set the width of each card (match with your CSS width)
    return currentIndex * cardWidth * -1 + 'px'; // Translate by the width of each card
  };

  // Calculate the percentage to translate each photo for the second gallery
  const getTranslateXSecondGallery = () => {
    const cardWidth = 300; // Set the width of each card (match with your CSS width)
    return currentIndexSecondGallery * cardWidth * -1 + 'px'; // Translate by the width of each card
  };

  return (
    <div className="landing-container">
      {/* Navbar */}
      {/* <nav className="navbar">
        <div className="navbar-logo">Barki_Shots</div>
        <ul className="navbar-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#upload">Upload</a></li>
          <li><a href="#lp">Latest Photos</a></li>
        </ul>
      </nav> */}

      <header className="landing-header">
        <h1>Welcome to Barki_Shots</h1>
        <p>Explore and Share Beautiful Photography!</p>
      </header>

      {/* First Photo Gallery */}
      <section className="photo-gallery">
        <button className="scroll-btn left" onClick={scrollLeft}>{"<"}</button>
        <div className="card-container">
          <div
            className="cards-wrapper"
            style={{
              transform: `translateX(${getTranslateX()})`,
              width: `${photos.length * 300}px`, // Set width for all photos
            }}
          >
            {photos.map((photo, index) => (
              <div key={index} className="photo-card" onClick={() => openModal(photo)}>
                <img src={photo.src} alt={photo.title} />
                <p>{photo.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>{">"}</button>
      </section>

      {/* Second Photo Gallery */}
      <section className="photo-gallery">
        <button className="scroll-btn left" onClick={scrollLeftSecondGallery}>{"<"}</button>
        <div className="card-container">
          <div
            className="cards-wrapper"
            style={{
              transform: `translateX(${getTranslateXSecondGallery()})`,
              width: `${secondGalleryPhotos.length * 300}px`, // Set width for all photos
            }}
          >
            {secondGalleryPhotos.map((photo, index) => (
              <div key={index} className="photo-card" onClick={() => openModal(photo)}>
                <img src={photo.src} alt={photo.title} />
                <p>{photo.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="scroll-btn right" onClick={scrollRightSecondGallery}>{">"}</button>
      </section>

      {/* Modal for full-size image */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
            <button onClick={() => downloadImage(selectedImage.src)} className="download-btn">
              Download
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Barki_Shots. All Rights Reserved.</p>
        <div className="instagram">
          <a href="https://www.instagram.com/barki_shots/" target="_blank" rel="noreferrer">
            @barki_shots
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
