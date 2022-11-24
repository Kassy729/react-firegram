import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const userFirestore = (myCollection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, myCollection), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        console.log(doc);
      });
    });

    return unsubscribe; // ImageGrid component가 unmount 될 때 myCollection에 대한 listener를 해제하기 위함
  }, [myCollection]);

  return { docs };
};

export default userFirestore;
