import grpImage from "/dept-grp.jpg";
// import { BackgroundGradientAnimationDemo } from '../../ui-components/Gradient-Bg';
const Dept = () => {
  return (
    <div className='flex flex-col justify-center gap-10 mx-auto p-5 '>
            <h1 className='text-center font-bold text-xl text-black lg:text-3xl mt-10'>Department of Computer Science and Engineering
            </h1>
            <img src={grpImage} alt="" width={1000} className='mx-auto'/>
            <p className='text-base text-justify lg:text-lg text-black lg:text-justify px-4 lg:px-16 align-baseline'>Journey of the Department of Computer Science and Engineering at Mount Zion College of Engineering and Technology commenced in 2001, and since then, we have flourished in expertise and prowess within the realms of Computer Science and Engineering Curriculum and Research. Our offerings include B.E. in Computer Science and Engineering with a cohort of 90 students, M.E. in Computer Science and Engineering, admitting 18 students, and part-time opportunities for Doctoral Scholars. Renowned for excellence in both pedagogy and research, our faculty boasts exceptional academic credentials and high esteem. Our department's mission is to equip students with the holistic skill set essential for success in the modern workplace. We firmly believe that knowledge and research are catalysts for positive change. To empower our students, we have spearheaded innovative programs. Our graduates are adept at discerning, analyzing, and resolving intricate cross-disciplinary challenges, coupled with effective communication of their expertise throughout their careers. Our academic offerings encompass Value Added Courses, Certificate Courses, GATE Coaching, Placement Training, 24-hour Workshops, and Idea Hackathons. The paramount objective of our department is to achieve complete student placement. We categorize students' programming skills as beginners, intermediates, or advanced. Subsequently, Value Added Courses encompassing Web design, Mobile Application Development, IoT Training, and other contemporary tools are tailored to enhance their skills. Advanced students receive training in the latest programming languages pertinent to the IT sector trends. Real-time experience is fostered through team-based mini-projects, culminating in a project exhibition to foster knowledge transfer. We take immense pride in sharing that the Department of Computer Science and Engineering (CSE) has achieved a remarkable feat by consecutively securing the first prize in the prestigious national-level Smart India Hackathon since 2019.</p>

       </div>
  )
}

export default Dept