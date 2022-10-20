import logo from './logo.svg';
import './App.css';
import selfie from "./Selfie.png";

function App() {
  return (
    <div className="App">
<div>
  {/* header with working nav links */}
  <header className="header">
    <h1>Fatih Suljovic</h1>
    <nav>
      <ul> 
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  </header>
  {/* picture of myself & banner text */}
  <section className="selfie">
    <img src={selfie} alt="blue banner background" />
    <p>Welcome to my Portfolio!</p>
  </section>
  {/* about me section containing text about me */}
  <section id="about-me" className="section">
    <h2>About Me</h2>
    <div className="content">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa suscipit doloribus officia earum ipsum ut magnam iusto inventore, reiciendis, facere tenetur expedita ab nulla incidunt quis. Libero, vel tempore? Illo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia et consectetur blanditiis, laboriosam ratione quod deleniti placeat eos fugit voluptate id incidunt exercitationem officia. Et maxime eligendi optio nobis qui.</p>
    </div>
  </section>
  {/* work section with the boxes placed first so the work text can be displayed on the right */}
  <section id="work" className="subsection">
    <div>
      <h2>Work</h2>
    </div>
    <ul className="flex-container"> 
      <li className="flex-item main-item" alt="Refactor-SEO"><a href="https://fatihsul.github.io/Refactor-SEO/">Refactor-SEO</a></li>
      <li className="flex-item second-item" alt="Cocktail-Curator"><a href="https://james-stapleton.github.io/Cocktail-Curator/">Cocktail-Curator</a></li>
      <li className="flex-item third-item" alt="Note-Taker"><a href="https://note-taker-fs.herokuapp.com/">Note-Taker</a></li>
      <li className="flex-item fourth-item" alt="Weather-Dashboard"><a href="https://fatihsul.github.io/Weather-Dashboard/">Weather-Dashboard</a></li>
      <li className="flex-item fifth-item" alt="Facebook"><a href="https://github.com/FatihSul/Professional-README-Generator">README-Generator</a></li>
      <li className="flex-item sixth-item" alt="Facebook"><a href="https://cocktail-curator-3.herokuapp.com/">Cocktail-Curator-2</a></li>
    </ul>
  </section>
  {/* resume section */}
  <section id="resume" className="section">
    <h2>Resume</h2>
    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad optio quisquam in consequatur. Atque minima veniam itaque eius delectus? Distinctio debitis veritatis similique quo rerum dicta nostrum, dolorem porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laborum. Sapiente numquam cum, natus ducimus quis deserunt praesentium, laborum inventore repellat, doloribus quia dignissimos similique earum quod eius nihil unde!</p>
  </section>
  {/* footer section */}
  <footer id="contact"> 
    <p>Contact Me</p>
    <p><a href="#">fatih9720@hotmail.com</a></p>
  </footer>
</div>

    </div>
  );
}

export default App;
