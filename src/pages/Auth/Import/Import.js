import axios from 'axios';
import React, { useState } from 'react'

const Import = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState("");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUpload = async () => {
        if (!selectedFile || !name) {
        alert("Please select a file and enter a name!");
        return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("name", name);

        try {
        const response = await axios.post("http://localhost:8081/api/user/import", formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            },
        });
        alert("File uploaded successfully!");
        } catch (error) {
        console.error("Upload failed", error);
        }
    };

    return (
        <div>
        <input type="text" placeholder="Enter name" value={name} onChange={handleNameChange} />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        </div>
    );

}

export default Import