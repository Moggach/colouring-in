import React from 'react';
import './refreshbutton.css';

function RefreshButton() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="refresh-button">
      <button onClick={refreshPage}>Send me all new colours!</button>
    </div>
  );
}
export default RefreshButton;
