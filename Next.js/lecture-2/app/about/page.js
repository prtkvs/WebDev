import React from 'react'
import Script from 'next/script';
const about = () => {
  return (
    <div>
    <Script>{`alert("Welcome to about's page");`}</Script>
    This is About Section</div>
  )
}

export default about;
export const metadata = {
  title: "About - Connect with world",
  description: "This is Facebook About",
};