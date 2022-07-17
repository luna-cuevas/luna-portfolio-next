import Button from "../components/Button";
import Link from 'next/link';

const Project = ({ project }) => {
  const title = project.attributes.projectTitle;
  const skills = project.attributes.projectSkillz;
  const desc = project.attributes.projectDesc.slice(0, 180) + '...';
  const image = project.attributes.projectImages.data[0].attributes.url

  return (
    <div  className='lg:w-1/4 z-20 h-fit transition-all duration-200 hover:shadow-[0px_5px_10px_5px_#474646eb] pb-4 w-10/12 bg-[#1c1b1bee] sm:w-[45%] border-2 rounded-xl border-gray-700 mx-auto text-center'>
      <img className='h-1/3 p-4 m-auto' src={image} alt="" />
      <div className="w-5/6 m-auto">
        <h1 className='md:text-xl py-1 text-base border-b-2 border-gray-600'>{title}</h1>
        <div className="flex flex-wrap justify-center gap-2 my-4">
          {skills.map((skill, id) => (
            <p style={{'border-image': 'linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%'}} key={id} className='p-[2px] border-[1px] text-[10px] text-left'>{skill.skill}</p>
          ))}
        </div>
        <p className="pb-2 text-sm font-light text-left">{desc}</p>
      </div>
      <button id="bn30">

        <Link href={`/project-details/${project.id}`}>Read More</Link>
      </button>
      {/* <Button targetTo={true} text='Read More' link={`/project-details/${project.id}`} className="hover:bg-gradient-to-l hover:shadow-[2px_3px_0px_#c679c9] transition-all duration-600 bg-gradient-to-r from-[#4568dc] to-[#b06ab3] rounded-lg px-8 py-1 m-3" /> */}
    </div>
  ) 
}

export default Project