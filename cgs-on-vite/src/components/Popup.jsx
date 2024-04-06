import React, { useRef, useState } from 'react';

function Popup({ handleClose, title, content }) {
  const popupRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = popupRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      popupRef.current.style.left = `${newX}px`;
      popupRef.current.style.top = `${newY}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={popupRef}
      className='absolute flex items-center justify-center bottom-1/4 left-1/2'
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="popup w-[20vw] z-50 bg-purple-500 h-[40vh] border-pink-500 border-2">
        <div className=" popup-content border-pink-500 border-2">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <p className='font-bold'>{title}</p>
        </div>
        {content}
      </div>
    </div>
  );
}

export default Popup;
