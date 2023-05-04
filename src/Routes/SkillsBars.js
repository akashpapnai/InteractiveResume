function SkillsBars() {
   return (
      <div className="container mt-2 mb-5">
         <h2>Skills</h2>
         <h4>Languages</h4>
         <div className="row">
            <div className="col-md-6">
               <h5><span>C#</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>C++</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>Python</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>JavaScript</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>HTML/CSS</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <h4 className="mt-2">Frameworks</h4>
            <div className="col-md-6">
               <h5><span>Dotnet</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>Bootstrap</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SkillsBars;