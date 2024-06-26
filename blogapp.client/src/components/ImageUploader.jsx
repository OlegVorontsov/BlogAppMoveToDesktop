import React, { useState } from 'react';

const ImageUploader = ({byteImageAction}) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      const imgUrl = URL.createObjectURL(file);

      reader.onload = (e) => {
        const fileString = e.target.result;
        const byteArray = new Uint8Array(e.target.result);
        byteImageAction(imgUrl, byteArray);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className='mb-4'>
      <p>Загрузка изображения</p>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUploader;