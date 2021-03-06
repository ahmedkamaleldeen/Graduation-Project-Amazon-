// import React from "react";
// import Spinner from "react-bootstrap/Spinner";

// function LoadingBox() {
//   return (
//     <Spinner animation="border" role="status">
//       {/* <span className='Visually-hidden'>Loading....</span> */}
//     </Spinner>
//   );
// }

// export default LoadingBox;

import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="statux">
      <span className="visually-hidden">loading...</span>
    </Spinner>
  );
}
