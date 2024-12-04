import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";

export default function Stamps() {
  const [stamps, setStamps] = useState([]);

  const fetchStamps = async () => {
    const querySnapshot = await getDocs(collection(db, "stamps"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    setStamps(data);
  };

  const handleAddStamp = async () => {
    try {
      await addDoc(collection(db, "stamps"), {
        user: auth.currentUser.email,
        timestamp: new Date().toISOString(),
      });
      fetchStamps(); // 새로고침
    } catch (error) {
      console.error("Error adding stamp:", error);
    }
  };

  useEffect(() => {
    fetchStamps();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl mt-4">내 스탬프</h1>
      <button
        onClick={handleAddStamp}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        스탬프 추가
      </button>
      <div className="mt-6">
        {stamps.map((stamp, index) => (
          <p key={index}>{stamp.timestamp}</p>
        ))}
      </div>
    </div>
  );
}
