export default function Experience() {
   return(
      <div className="container mt-2" style={{marginBottom:'90px'}}>
         <h1 className="text-center">Experience</h1>
         <hr/>
         <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center align-items-center">
            <div className="col hover-zoom">
               <div className="card h-100">
               <img src={process.env.PUBLIC_URL + '/Experience/ontrack.png'} className="card-img-top img-fluid" alt="Image 1"/>
               <div className="card-body">
                  <h5 className="card-title"><span>Ontrack (Client: Netmeds)</span></h5>
                  <p className="card-text">Software Developer</p>
               </div>
               </div>
            </div>
            <div className="col hover-zoom">
               <div className="card h-100">
               <img src={process.env.PUBLIC_URL + '/Experience/Netmeds.jpg'} className="card-img-top img-fluid" alt="Image 2"/>
               <div className="card-body">
                  <h5 className="card-title"><span>Netmeds</span></h5>
                  <p className="card-text">Software Developer</p>
               </div>
               </div>
            </div>
         </div>
      </div>
   )
}