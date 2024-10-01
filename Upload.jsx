import React, { useState } from "react";
import axios from "axios";
import './Upload.css';

function Upload() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        cameraName: "",
        category: "",
        description: "",
        file: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("location", formData.location);
        data.append("cameraName", formData.cameraName);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("file", formData.file);

        try {
            const res = await axios.post("/api/upload", data);
            alert(res.data);
        } catch (err) {
            console.error(err);
            alert("Error uploading the photo");
        }
    };

    return (
        <div className="upload-section">
            <h2>Upload Your Photos</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input 
                        type="text" 
                        name="location" 
                        value={formData.location} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Camera Name:</label>
                    <input 
                        type="text" 
                        name="cameraName" 
                        value={formData.cameraName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select 
                        name="category" 
                        value={formData.category} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Tiger">Tiger</option>
                        <option value="Elephant">Elephant</option>
                        <option value="Dasara">Dasara</option>
                        <option value="Mountains">Mountains</option>
                        <option value="Forest">Forest</option>
                        <option value="Food">Food</option>
                        <option value="Clouds">Clouds</option>
                        <option value="Automobiles">Automobiles</option>
                        <option value="Lights">Lights</option>
                        <option value="Palace">Palace</option>
                        <option value="Place">Place</option>
                        <option value="Sports">Sports</option>
                        <option value="Nature">Nature</option>
                        <option value="Water">Water</option>
                        <option value="Beach">Beach</option>
                        <option value="Sunset">Sunset</option>
                        <option value="People">People</option>
                        <option value="Books">Books</option>
                        <option value="Other Animals">Other Animals</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        maxLength="600" // Limit to 600 characters (approximately 100 words)
                        rows="5"
                        placeholder="Write a short description (up to 100 words)"
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Upload Photo:</label>
                    <input 
                        type="file" 
                        name="file" 
                        onChange={handleFileChange} 
                        required 
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default Upload;
