import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBQysSgUff4q4L3G9AHXjmpoA4aKA0-9ZU",
    authDomain: "projeto-pi-8b50b.firebaseapp.com",
    projectId: "projeto-pi-8b50b",
    storageBucket: "projeto-pi-8b50b.appspot.com",
    messagingSenderId: "867003812254",
    appId: "1:867003812254:web:ac6c3c2279fcfe2db52e8f",
    measurementId: "G-J738KK0T4B"

};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const Image = ({ value, onChange }) => {
  
  const [progress, setProgress] = useState(0);


  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;
    
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      error => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          onChange(url);
        })
      }
    )
    
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" accept="image/*" onChange={handleImageChange} className="border-2 border-gray-300 p-2 rounded-md" />
      {progress > 0 && <p className="text-sm text-gray-500 mt-2">{progress}% uploaded</p>}
      {value && <img src={value} alt="Product" className="max-w-xs mt-4" />}
      
    </div>
  );
};

export default Image;