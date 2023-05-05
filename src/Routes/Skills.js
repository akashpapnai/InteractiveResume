export default function Skills() {
   return(
      <div className="container mt-2" style={{marginBottom:'90px'}}>
         <h1 className="text-center">Skills</h1>
         <hr/>
         <h2 className="d-flex justify-content-center align-items-center">Languages</h2>
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

         <h2 className="d-flex justify-content-center align-items-center m-4">Frameworks</h2>
         <div className="row row-cols-1 row-cols-md-6 g-4 d-flex justify-content-center align-items-center">
            <div className="col hover-zoom d-flex justify-content-center align-items-center" style={{minWidth:'200px'}}>
               <div className="card h-100">
               <img src={process.env.PUBLIC_URL + '/Skills/dotnet.png'} className="card-img-top img-fluid p-4" alt="Dotnet" />
               <div className="card-body">
                  <h5 className="card-title"><span>Dotnet</span></h5>
                  <p className="card-text">For Web Applications/API</p>
               </div>
               </div>
            </div>
            <div className="col hover-zoom d-flex justify-content-center align-items-center m-4" style={{minWidth:'200px'}}>
               <div className="card h-100">
                  <img src={process.env.PUBLIC_URL + '/Skills/bootstrap.png'} className="card-img-top img-fluid p-4" alt="C Sharp" />
                  <div className="card-body">
                     <h5 className="card-title"><span>Bootstrap</span></h5>
                     <p className="card-text">For CSS Styling</p>
                  </div>
               </div>
            </div>
         </div>

         <h2 className="d-flex justify-content-center align-items-center m-2">Database</h2>
         <div className="row row-cols-1 row-cols-md-6 g-4 d-flex justify-content-center align-items-center">
            <div className="col hover-zoom d-flex justify-content-center align-items-center" style={{minWidth:'200px'}}>
               <div className="card h-100">
               <img src={process.env.PUBLIC_URL + '/Skills/server.jpg'} className="card-img-top img-fluid p-4" alt="Dotnet" />
               <div className="card-body">
                  <h5 className="card-title"><span>SQL Server</span></h5>
                  <p className="card-text">For Data Integration</p>
               </div>
               </div>
            </div>
         </div>
      </div>
   )
}