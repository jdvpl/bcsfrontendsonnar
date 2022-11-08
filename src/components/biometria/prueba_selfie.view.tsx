import React from 'react';

const view = (me: any) => {
  return (
    <div id="photo_live_selfie_page" data-testid="selfie">
      <div id="target"></div>

      {me.state.message !== '' ? (
        <div className="message">{me.state.message}</div>
      ) : (
        <button className="start_button" onClick={me.start}>
          Start
        </button>
      )}

      {/* <div className="images">
        <div className="image preface_image">
          {me.state.prefaceImage ? (
            <img src={me.state.prefaceImage} alt="preface" />
          ) : (
            <span>Preface Image</span>
          )}
        </div>

        <div className="image face_image">
          {me.state.faceImage ? (
            <img src={me.state.faceImage} alt="face" />
          ) : (
            <span>Face Image</span>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default view;
