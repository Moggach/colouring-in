import React from 'react';

const Button = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button onClick={refreshPage}>Get me new colours!</button>
    </div>
  );
};

export default Button;
