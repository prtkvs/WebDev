import React from 'react'
import Script from 'next/script';
const contact = () => {
  return (
    <div>
        <Script>{`alert("Welcome to contact's page");`}</Script>
        This is Contact Section</div>
  )
}

export default contact;
export const metadata = {
  title: "Contact - Connect with world",
  description: "This is Facebook Contact",
};