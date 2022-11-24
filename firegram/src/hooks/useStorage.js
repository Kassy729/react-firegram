import React, { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

const useStorage = (file) => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(percentage);

        // switch (snapshot.state) {
        //   case "paused":
        //     console.log("Upload is paused");
        //     break;
        //   case "running":
        //     console.log("Upload is running");
        //     break;
        // }
      },
      (error) => {
        // Handle unsuccessful uploads
        setError(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  }, [file]);

  return { url, error, progress }; // {'progress' : progress, 'url' : url, 'error' : error}
};

export default useStorage;
