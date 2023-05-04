export default function Skills() {
   return(
      <div className="container mt-2" style={{marginBottom:'90px'}}>
         <h1 className="text-center">Skills</h1>
         <hr/>
         <div className="row row-cols-1 row-cols-md-6 g-4 d-flex justify-content-center align-items-center">
            <div className="col hover-zoom d-flex justify-content-center align-items-center" style={{minWidth:'200px'}}>
               <div className="card h-100">
               <img src={process.env.PUBLIC_URL + '/Skills/cpp.png'} className="card-img-top img-fluid p-4" alt="CPP" />
               <div className="card-body">
                  <h5 className="card-title"><span>C++</span></h5>
                  <p className="card-text">For Programming</p>
               </div>
               </div>
            </div>
            <div className="col hover-zoom d-flex justify-content-center align-items-center" style={{minWidth:'200px'}}>
               <div className="card h-100">
               <img src={process.env.PUBLIC_URL + '/Skills/cs.png'} className="card-img-top img-fluid p-4" alt="C Sharp" />
               <div className="card-body">
                  <h5 className="card-title"><span>C Sharp</span></h5>
                  <p className="card-text">For Web Development</p>
               </div>
               </div>
            </div>
            <div className="col hover-zoom d-flex justify-content-center align-items-center" style={{minWidth:'200px'}}>
               <div className="card h-100">
               <img src={process.env.PUBLIC_URL + '/Skills/python.png'} className="card-img-top img-fluid p-4" alt="Python" />
               <div className="card-body">
                  <h5 className="card-title"><span>Python</span></h5>
                  <p className="card-text">For Productivity</p>
               </div>
               </div>
            </div>
         </div>
      </div>
   )
}