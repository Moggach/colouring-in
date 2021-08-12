import React from 'react';

function RefreshButton() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <button onClick={refreshPage}>Send me some colours!</button>
    </div>
  );
}
export default RefreshButton;
