import React, { useState } from "react";
export default function UploadImage({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onUpload(file); 
  };

  return (
    <label>
      <input type="file" onChange={handleUpload} />
      {preview && <img src={preview} />}
    </label>
  );
}