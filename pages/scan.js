import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { auth } from "../firebaseConfig";

export default function Scan() {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data); // QR 데이터
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl mb-4">QR 코드 스캔</h1>
      <div className="w-full max-w-md">
        <QrReader onResult={handleScan} constraints={{ facingMode: "environment" }} />
      </div>
      {scanResult && <p className="mt-4 text-lg">스캔 결과: {scanResult}</p>}
    </div>
  );
}
