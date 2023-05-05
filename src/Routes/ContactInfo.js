import { useState } from "react";

export default function ContactInfo() {
   const eMail = "akashpapnai@gmail.com";
   const [text, setText] = useState(eMail);

  const handleClick = () => {
      navigator.clipboard.writeText(text);
      setText('Copied!');
   };
   const handleMouseLeave = () => {
      setText(eMail);
   };
   return(
      <div className="container mt-2" style={{marginBottom:'90px'}}>
         <h1 className="text-center">Contact Information</h1>
         <hr/>
         <h3>Email</h3>
         <div onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <span><a href="mailto:akashpapnai@gmail.com">{text}</a></span>
         </div>
      </div>
   )
}