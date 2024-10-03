import React from "react";

const items = [
  { src: "images/facebook.png", url: "https://www.facebook.com", target: "_blank" },
  { src: "images/twitter.png", url: "https://www.twitter.com", target: "_blank"  },
  { src: "images/tiktok.png", url: "https://www.tiktok.com", target: "_blank"  },
];

const Social = () => {
  return (
    <ul className="social">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.url} target={item.target}><img src={item.src} alt={`Social icon ${index + 1}`} /></a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
