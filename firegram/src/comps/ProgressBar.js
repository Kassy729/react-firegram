import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file); // firebase storage에 파일을 업로드
  console.log("progress:" + progress + ", url:" + url);

  useEffect(() => {
    if (url) {
      console.log("upload completed!");
      const createdAt = serverTimestamp();
      try {
        addDoc(collection(db, "images"), { url, createdAt });
      } catch (e) {
        console.error("Error adding a document:", e);
      }
      setFile(null);
    }
  }, [url]);
  return <div>{progress + "%"}</div>;
};

export default ProgressBar;
