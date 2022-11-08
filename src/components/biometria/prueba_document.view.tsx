import React from 'react';

const view = (me: any) => {
  return (
    <div data-testid="document_photo" id="document_page">
      <div id="target"></div>

      {me.state.message !== '' ? (
        <div className="message">{me.state.message}</div>
      ) : (
        <button className="start_button" onClick={me.start}>
          Start
        </button>
      )}
    </div>
  );
};

export default view;
