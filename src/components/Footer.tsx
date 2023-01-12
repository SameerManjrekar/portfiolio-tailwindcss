import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-2 items-center justify-between">
      <div>
        <a href="" className="mr-2 text-blue text-[0.9rem]">
          Twitter
        </a>
        <a href="" className="mr-2 text-blue text-[0.9rem]">
          Facebook
        </a>
        <a href="" className="mr-2 text-blue text-[0.9rem]">
          Instagram
        </a>
      </div>
      <div className="text-[0.9rem] text-blue">&#169; 2023 All rights reserved.</div>
    </div>
  );
};

export default Footer;
