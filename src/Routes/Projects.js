import React, { useRef, useEffect } from 'react';

export default function Projects() {
   return (
      <div className="container mt-2" style={{marginBottom:'90px'}}>
         <h1 className="text-center">Projects</h1>
         <hr/>
         <h2 className="d-flex justify-content-center align-items-center">Web Projects</h2>
         <div className="row row-cols-1 row-cols-md-6 g-4 d-flex justify-content-center align-items-center"> 
            <div className="col hover-zoom d-flex justify-content-center align-items-center" style={{minWidth:'200px'}}>
               <div className="card h-100">
               <a href='https://akashpapnai.bsite.net/' target='_blank'>
                  <img src={process.env.PUBLIC_URL + '/Projects/hospital.png'} className="card-img-top img-fluid p-4" alt="Practice Project Representing Hospital Business" />
               </a>
               <div className="card-body">
                  <h5 className="card-title"><span>Hospital Business</span></h5>
                  <p className="card-text">Asp.Net Practice Project</p>
               </div>
               </div>
            </div>
         </div>
      </div>
    );
}