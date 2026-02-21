import React from 'react'
import mascot from './../../assets/mascot.png'

function Home() {
  return (
    <section id='home_page_ outer'>
      <main id='home_page_inner'>
        <img src={mascot} alt="This is the image of the mascot for the productivity software" />
          <h1>Pugsley</h1>
          <p>Pugsley is a friendly productivity companion designed to help you organize your tasks, manage your time, and stay focused without the stress or overwhelm 
          of traditional productivity tools.</p>
       
        <br />
       
        <div id="home_buttons">
          <button>Start Tasking</button>
        </div>
      
      </main>
     </section>
  )
}

export default Home
