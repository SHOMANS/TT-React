import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px solid red;

  & input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
  }

  & label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  & div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  & img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    object-fit: contain;
  }
`;

const ImageInput = ({ image, setImage }) => {
  const [filePath, setFilePath] = useState(image || null);
  const [isLoading, setIsLoading] = useState(false);

  const UploadFile = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('image', file);
    try {
      // const headers = {};
      // const res = await axios.post('url', formData, headers);
      // const res = await axios.put('url', res, headers); // change profile image
      const res = 'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg';

      setFilePath(res);
      setImage(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledWrapper>
      {isLoading ? <div>Loading...</div> : <img src={filePath} alt='' />}
      <input id='file' type='file' onChange={UploadFile} />
      {filePath ? '' : <label htmlFor='file'>+</label>}
    </StyledWrapper>
  );
};

export default ImageInput;
