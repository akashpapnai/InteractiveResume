import React,{ useState,useEffect } from "react";

function SkillsBars() {
   const [widths, setWidths] = useState({
      cSharpWidth: 0,
      cppWidth: 0,
      pythonWidth: 0,
      jsWidth: 0,
      jQueryWidth: 0,
      htmlCssWidth: 0,
      dotnetWidth: 0,
      bootstrapWidth: 0,
      angularWidth: 0
   });

   useEffect(() => {
      const initialWidths = {
         cSharpWidth: 80,
         cppWidth: 90,
         pythonWidth: 90,
         jsWidth: 75,
         jQueryWidth: 80,
         htmlCssWidth: 100,
         dotnetWidth: 85,
         bootstrapWidth: 80,
         angularWidth: 50
      };

      const timeout = setTimeout(() => {
         setWidths(initialWidths);
      }, 1);

      return () => clearTimeout(timeout);

   }, []);

   return (
      <div className="container mt-2 mb-5">
         <h2>Skills</h2>
         <h4>Languages</h4>
         <div className="row">
            <div className="col-md-6">
               <h5><span>C#</span></h5>
               <div className="progress">
                  <div className={`progress-bar`} role="progressbar" style={{width: `${widths.cSharpWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>C++</span></h5>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: `${widths.cppWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>Python</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: `${widths.pythonWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>JavaScript</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: `${widths.jsWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>jQuery</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: `${widths.jQueryWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>HTML/CSS</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: `${widths.htmlCssWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <h4 className="mt-2">Frameworks</h4>
            <div className="col-md-6">
               <h5><span>Dotnet</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: `${widths.dotnetWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>Bootstrap</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: `${widths.bootstrapWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            <div className="col-md-6">
               <h5><span>Angular</span></h5>
               <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: `${widths.angularWidth}%`,transition: "width 1s ease-in-out"}} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SkillsBars;