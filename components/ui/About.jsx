import Image from 'next/image'

function About() {
  return (
    <div className='relative bg-[#000818] p-10'>
      <div className='container grid md:grid-cols-2 grid-cols-1 mx-auto' >
        <Image
          src='/images/about-img.png'
          alt=''
          width={500}
          height={500}
          className=''
        />
        <div className='container text-white items-start flex flex-col justify-center p-10'>
          <p className='container  font-extrabold font-dancing text-[55px] p-3 text-start'>We Are Feane</p>
          <p className='container text-md  p-5 '>
            There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words
            which look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            you need to be sure there anything embarrassing hidden in the middle of text. Al
          </p >
          <div className='mt-3 ml-6 hover:scale-105' >
            <button className='rounded-3xl px-9 py-2 text-xl bg-primary ' >Read More</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About