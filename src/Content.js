import SkillsBars from './SkillsBars';
import moment from 'moment';

export default function Content() {
   const today = new Date();
  const secondStart = moment('2022-08-04');
  const todayDate = moment(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`)
  const diffInMonths = moment('2022-04-07').diff(moment('2021-09-07'), 'months') + todayDate.diff(secondStart,'months');
   return(
         <div className="container mb-5">
        <div className="row">
          <div className="col-md-3">
            <img className="img-thumbnail mt-2 img-fluid hover-zoom shadow" src={process.env.PUBLIC_URL + '/logo193.jpg'} alt="Profile Photo" />
            <SkillsBars/>
            
          </div>
          <div className="col-md-6 d-flex mt-4 flex-column" style={{textAlign:'justify'}}>
            <h2 className='hover-zoom'>Akash Papnai</h2>
            <span>
            <p>
              As a C# .NET developer with {`${Math.floor(diffInMonths / 12)} year${Math.floor(diffInMonths / 12) !== 1 ? 's' : ''} and ${diffInMonths % 12} month${diffInMonths % 12 !== 1 ? 's' : ''}`}
              &nbsp;of experience, I bring a wealth 
              of technical knowledge and practical expertise to any project I undertake. 
              My experience in working with the .NET framework, along with my understanding 
              of the C# programming language, allows me to develop robust and scalable 
              applications that meet the needs of my company.
            </p>
            <p>
              In my role as a developer, I have demonstrated a keen ability to work 
              collaboratively with other members of my team. I have adepted to taking 
              requirements and translating them into functional specifications, and I have a 
              strong understanding of the software development lifecycle.
            </p>
            <p>
              With my experience in C# .NET development, I are well-versed in creating and 
              maintaining web applications, depending on the needs of my company. I have 
              experience with various tools and technologies, such as Visual Studio, ASP.NET, 
              Entity Framework, LINQ, and SQL Server, and are comfortable working with 
              different development methodologies, such as Agile or Waterfall.
            </p>
            <p>
              One of my key strengths as a developer is my ability to write clean, 
              maintainable, and efficient code. I understand the importance of code quality, 
              and are committed to following best practices and coding standards. 
              I have a strong attention to detail, and take pride in delivering high-quality 
              work that meets or exceeds client expectations.
            </p>
            <p>
              As a C# .NET developer, I am also committed to continuous learning and 
              improvement. I stay up-to-date with the latest trends and technologies in my 
              field, and are always looking for ways to enhance my skills and knowledge. 
              I am a proactive problem-solver, and enjoy tackling complex challenges and 
              finding innovative solutions.
            </p>
            <p>
              Overall, my experience and expertise as a C# .NET developer make me a 
              valuable asset to any development team. My strong technical skills, 
              collaborative approach, and commitment to quality ensure that I can deliver 
              high-quality software solutions that meet the needs of my company.
            </p>
            </span>
          </div>
        </div>
      </div>
   )
}