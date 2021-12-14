import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Cyrus.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">

            Enthusiast, professional and IT-versed, always looking for the next challenge and possibility for personal as well as professional development.
            <br/><br/>
            I take pride in being multifaceted, having worked many different fields. Although I, for a few years, looked for different roads, I have since come to terms with the fact that IT is what I was born into, what I have spent my life doing and where my passion lies.
            <br/><br/>
            My path, as I remember it, began at the tender age of 8 programming BBS software. 
            <br/><br/>
            Growing in to a teenager, my focus, as for many people, shifted to computer games. I put my heart and soul in to the world of "first person shooters" (FPS), and managed to become the world champion of Quake 3 Arena at 17. 
            My "Quake"-experience spurred me in to the field of game development and I spent my early adulthood educating myself in said field (HGO, Högskolan på Gotland)
            <br/><br/>
            Personally, I feel that I thrive in an environment where I'm challenged, get to motivate people and develop my own skillset.
            <br/><br/>
            Even though it has taken me a while to get to grips with what I really want to do with my time and where my passions lie, I feel confident that I will be able to use my skillset, ambition, network, knowledge and passions to deliver unparalleled value.
            <br/><br/>
            I also feel that my previous job experiences and my education in other fields, is something that has really allowed me to grow and see the big picture, in a way that I don't think most graduates do. 

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}