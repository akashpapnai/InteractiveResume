function Footer() {
  return (
   <footer className="footer fixed-bottom bg-light text-center text-lg-start" style={{minWidth:'399px'}}>
      {/* <div class="container p-4">
      <div class="row">
         <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Footer Content</h5>
            <p>
            Ending Statement
            </p>
         </div>
         <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled mb-0">
            <li>
               <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
               <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
               <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
               <a href="#!" class="text-dark">Link 4</a>
            </li>
            </ul>
         </div>
         <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-0">Links</h5>
            <ul class="list-unstyled">
            <li>
               <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
               <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
               <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
               <a href="#!" class="text-dark">Link 4</a>
            </li>
            </ul>
         </div>
      </div>
      </div> */}
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      &copy; Akash Papnai&nbsp;|&nbsp;{new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}&nbsp;|&nbsp;My Interactive Resume
      </div>
   </footer>
  );
}

export default Footer;