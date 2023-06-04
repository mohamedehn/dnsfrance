import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";

const Actu = () => {

  return (
    <div className="pt-28 grid-cols-2">
      <iframe src='https://widgets.sociablekit.com/linkedin-page-posts/iframe/150085' frameBorder='0' width='100%' height='1000'></iframe>
      <Footer/>
    </div>
  );
};

export default Actu;




