import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect, useState } from 'react';

const Actu = () => {

  return (
    <div className="pt-28 grid-cols-2">
      <div className='sk-ww-linkedin-page-post grid-cols-2' data-embed-id='150085'></div>
      <script src='https://widgets.sociablekit.com/linkedin-page-posts/widget.js' async defer></script>
    </div>
  );
};

export default Actu;




