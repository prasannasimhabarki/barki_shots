import React, { useEffect, useState } from 'react';
import './About.css'; // You will need to create this CSS file to include the sliding effects
import myPhoto from './components/myPhoto.jpeg'; // Replace with the actual path to your image

const About = () => {
  const [photoVisible, setPhotoVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after a short delay
    setTimeout(() => {
      setPhotoVisible(true);
    }, 500); // Delay photo slide-up by 0.5 seconds

    setTimeout(() => {
      setContentVisible(true);
    }, 1500); // Delay content slide-in by 1.5 seconds
  }, []);

  return (
    <div className="about-container">
      <div className={`about-photo ${photoVisible ? 'visible' : ''}`}>
        <img src={myPhoto} alt="Prasanna Simha Barki M" />
      </div>
      <div className={`about-content ${contentVisible ? 'visible' : ''}`}>
        <h1>About the creator</h1>
        <p>Prasanna Simha Barki M is a hobbyist photographer from Mysuru. He started this website so that people around the world can see his work, download images for free, and also showcase their work by uploading. This is an open-source website where people can download any image for free.</p>
        <p>Prasanna learned photography from his father, a passionate photographer in the 1980s. He has captured beautiful moments from the world-famous Mysuru Dasara. His expertise is candid photography.</p>
        <p>He is a working professional in a software company. Every weekend, he dedicates time to capturing moments. His go-to place is Bandipur National Park, which is 90 km from Mysuru. Safari is not his cup of tea; instead, he takes his car and goes on drives with his camera as his companion.</p>
        <p>This website is the brainchild of Prasanna, and he continues to upload more of his work in the coming days. The website allows others to upload their work so that visitors can witness that too. This website is completely designed and deployed by him, and he calls this project his "pet project."</p>
      </div>
    </div>
  );
};

export default About;
