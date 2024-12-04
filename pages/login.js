import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

export default function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User info:", result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Google 로그인
      </button>
    </div>
  );
}
