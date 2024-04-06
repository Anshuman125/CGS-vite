import React, { useState } from 'react';
import Mysvg from '../assets/svg-path.svg';
import Games from './Games';
import './Mycomponents.css';
import Popup from './Popup';
import Graphics from './Graphics';


export const FoldersAbout = ({ text, title, content }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSvgClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="w-20 svg-image" onClick={handleSvgClick}>
        <img src={Mysvg} alt="My SVG" />
      </div>
      <div className="svg-text">{text}</div>
      {isPopupOpen && <Popup handleClose={handleClosePopup} title={title} content={content}/>}
    </>
  );
}

export const FoldersWhat = ({ text, title, content }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSvgClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="w-20 svg-image" onClick={handleSvgClick}>
        <img src={Mysvg} alt="My SVG" />
      </div>
      <div className="svg-text">{text}</div>
      {isPopupOpen && <Popup handleClose={handleClosePopup} title={title} content={content}/>}
    </>
  );
}

export const FoldersGame = ({ text }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSvgClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="w-20 svg-image" onClick={handleSvgClick}>
        <img src={Mysvg} alt="My SVG" />
      </div>
      <div className="svg-text">{text}</div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="close-button" onClick={handleClosePopup}>X</div>
            <Games />
          </div>
        </div>
      )}
    </>
  );
}

export const FoldersGraphics = ({ text }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSvgClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="w-20 svg-image" onClick={handleSvgClick}>
        <img src={Mysvg} alt="My SVG" />
      </div>
      <div className="svg-text">{text}</div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="close-button" onClick={handleClosePopup}>X</div>
            <Graphics />
          </div>
        </div>
      )}
    </>
  );
}

export const FoldersBlogs = ({ text, title, content }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSvgClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="w-20 svg-image" onClick={handleSvgClick}>
        <img src={Mysvg} alt="My SVG" />
      </div>
      <div className="svg-text">{text}</div>
      {isPopupOpen && <Popup handleClose={handleClosePopup} title={title} content={content}/>}
    </>
  );
}
