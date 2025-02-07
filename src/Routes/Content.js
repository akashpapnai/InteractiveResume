import SkillsBars from './SkillsBars';
import moment from 'moment';

export default function Content() {
  const secondStart = moment('2022-04-08');
  const todayDate = moment();
  const expInMonths = /*moment('2022-04-07').diff(moment('2021-09-07'), 'months') +*/ todayDate.diff(secondStart, 'months');
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-3">
          <img className="img-thumbnail mt-2 img-fluid hover-zoom shadow" src={process.env.PUBLIC_URL + '/logo193.jpg'} alt="Profile Photo" />
          <SkillsBars />

        </div>
        <div className="col-md-6 d-flex mt-4 flex-column text-justify">
          <h2 className='hover-zoom'>Akash Papnai</h2>
          <span>
            <span className='block'>
              As a C# .NET developer with {`${Math.floor(expInMonths / 12)} year${Math.floor(expInMonths / 12) !== 1 ? 's' : ''} and ${expInMonths % 12} month${expInMonths % 12 !== 1 ? 's' : ''}`}&nbsp;
              of experience, I have developed a strong technical foundation and hands-on expertise in software development. Over the past year, I have also gained valuable experience in Angular,
              allowing me to build dynamic and interactive web applications.
            </span>
            <br/>
            <span className='block'>
              Throughout my career, I have worked extensively with the .NET framework and C#, developing scalable and efficient applications that align with business needs.
              My proficiency with tools like Visual Studio, ASP.NET, Entity Framework, LINQ, and SQL Server has enabled me to deliver reliable solutions.
            </span>
            <br/>
            <span className='block'>
              In addition to my .NET expertise, my experience with Angular has allowed me to create seamless front-end applications that enhance user experience.
              I have worked on integrating Angular applications with backend services, ensuring smooth communication between client and server.
            </span>
            <br/>
            <span className='block'>
              Collaboration is an essential part of my workflow. I have worked closely with teams to translate project requirements into functional applications while maintaining a strong focus on
              code quality, performance, and maintainability. I follow best practices in both .NET and Angular development to ensure that my code is efficient and easy to maintain.
            </span>
            <br/>
            <span className='block'>
              I am committed to continuous learning and staying up to date with evolving technologies. Whether it's exploring new features in .NET or keeping up with Angular's latest advancements,
              I strive to improve my skills and adapt to industry trends.
            </span>
            <br/>
            <span className='block'>
              My blend of backend expertise in .NET and frontend experience in Angular allows me to contribute effectively to full-stack development.
              With a problem-solving mindset and a dedication to delivering high-quality software, I am always ready to take on new challenges and build impactful solutions.
            </span>
            <br/>
          </span>
        </div>
      </div>
    </div>
  )
}