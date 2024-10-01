import React, { useEffect, useState } from "react";
import axios from "axios";
import './LatestPhotos.css'; // Import the CSS

function LatestPhotos() {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null); // To store the selected image for modal

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await axios.get("/api/upload/latest");
                setPhotos(res.data);
            } catch (err) {
                console.error("Error fetching latest photos", err);
            }
        };

        fetchPhotos();
    }, []);

    const openModal = (photo) => {
        setSelectedPhoto(photo); // Open the modal with the selected photo
    };

    const closeModal = () => {
        setSelectedPhoto(null); // Close the modal
    };

    return (
        <div className="latest-photos">
            <h2>Latest Photos</h2>
            <div className="gallery">
                {photos.length > 0 ? (
                    photos.map(photo => (
                        <div key={photo.id} className="photo">
                            <img
                                src={`data:image/jpeg;base64,${photo.image}`}
                                alt={photo.name}
                                onClick={() => openModal(photo)} // Open the modal on click
                            />
                            <p className="photo-info"><strong>Name:</strong> {photo.name}</p>
                            <p className="photo-info"><strong>Location:</strong> {photo.location}</p>
                            <p className="photo-info"><strong>Camera:</strong> {photo.cameraName}</p>
                            <p className="photo-info"><strong>Category:</strong> {photo.category}</p> {/* Added category */}
                            <p className="photo-info"><strong>Description:</strong> {photo.description}</p> {/* Added description */}
                        </div>
                    ))
                ) : (
                    <p>No photos available</p>
                )}
            </div>

            {/* Modal for the selected photo */}
            {selectedPhoto && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={`data:image/jpeg;base64,${selectedPhoto.image}`} alt={selectedPhoto.name} className="modal-image" />
                        <a
                            href={`data:image/jpeg;base64,${selectedPhoto.image}`}
                            download={selectedPhoto.name}
                            className="download-button"
                        >
                            Download
                        </a>
                        <p className="modal-photo-info"><strong>Name:</strong> {selectedPhoto.name}</p>
                        <p className="modal-photo-info"><strong>Location:</strong> {selectedPhoto.location}</p>
                        <p className="modal-photo-info"><strong>Camera:</strong> {selectedPhoto.cameraName}</p>
                        <p className="modal-photo-info"><strong>Category:</strong> {selectedPhoto.category}</p> {/* Added category */}
                        <p className="modal-photo-info"><strong>Description:</strong> {selectedPhoto.description}</p> {/* Added description */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default LatestPhotos;
