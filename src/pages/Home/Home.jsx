import React from 'react'
import mascot from './../../assets/mascot.png'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section id="home_page_outer">
      <main id="home_page_inner">
        
        <img src={mascot} alt="" />
        
        <div>
          <h2>Pugsley</h2>
        <p>
            Pugsley is a friendly productivity companion designed to help you organize your tasks, manage your time, and stay focused without the stress or overwhelm of traditional productivity tools.
        </p>

        <div id="home_buttons">
          <button>
            <Link>Set Task</Link>
          </button>
        </div>
</div>
        </main>
    </section>
  )
}

export default Home
