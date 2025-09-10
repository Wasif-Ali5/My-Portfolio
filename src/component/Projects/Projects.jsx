import React from 'react'
import ProjectCard from './ProjectCard'
import p1 from '../../assets/currency.jpg'
import p2 from '../../assets/bmi.jpg'
import p3 from '../../assets/back2.jfif'



const Projects = () => {
  return (
    <div id="proj" className="p-10 md:p-24 text-white ">
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div  className="py-12 px-8 flex flex-wrap gap-5"> 
          <ProjectCard
            title="Currency Converter App"
            main="Its a Currency converter app which gives current exchange rates among 156+ countries using fetch API concept using HTML5,CSS3 and Javascript."
            image={p1}
            demoLink="https://wasif-ali5.github.io/Currency-Converter-App/"
            codeLink="https://github.com/Wasif-Ali5/Currency-Converter-App"
          />

          <ProjectCard
            
            title="Tic-Tac-Toe Game"
            main="Its a famous Tic tac toe game build by using html,css and basic javascript concepts.In this Game ,if user won the game against computer it shows You Win!, if Computer wins it works the same for Computer, also it has a reset game button which clear all turns and restart the Game."
            image={p3}
            demoLink="https://wasif-ali5.github.io/Tic-Tac-Toe/"
            codeLink="https://github.com/Wasif-Ali5/Tic-Tac-Toe"
          />

          <ProjectCard
            title="Guess-The-Number Game"
            main="Its a Guess a number game build by using React-Js in which user can enter a random number on the other hand computer also generate one random number ,user have 10 attempts to find the exact number."
            image={p2}
            demoLink="https://wasif-ali5.github.io/Guess-The-Number-game/"
            codeLink="https://github.com/Wasif-Ali5/Guess-The-Number-game"
          />
        </div>
    </div>
  )
}

export default Projects

