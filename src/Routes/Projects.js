import React from 'react';

export default function Projects() {
   return (
      <div className="container mt-2" style={{marginBottom:'90px'}}>
         <h1 className="text-center">Projects</h1>
         <hr/>
         <h2 className="d-flex justify-content-center align-items-center">Web Projects</h2>
         <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center align-items-center">
            <div className="col hover-zoom">
               <div className="card h-100">
               <a href='https://akashpapnai.github.io/AngularPracticeProject/browser' target='_blank' rel='noreferrer'>
                  <img src={process.env.PUBLIC_URL + '/Projects/hospital.png'} className="card-img-top img-fluid p-4" alt="Practice Project Representing Hospital Business" />
               </a>
               <div className="card-body">
                  <h5 className="card-title"><span>Hospital Business</span></h5>
                  <p className="card-text">Asp.Net and Angular Practice Project</p>
               </div>
               </div>
            </div>
         </div>
      </div>
    );
}