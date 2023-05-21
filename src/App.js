import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className='container'>
          <a href='#'> Start Bootstrap </a>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
      </header>
      <section id='homeSection'>
        <div className='container'>
          <img src="https://qph.cf2.quoracdn.net/main-thumb-778685981-200-bpizajoddifmwcvvshipldcgnrxfxwnl.jpeg" alt=''></img>
          <h1>Full Width Pics</h1>
          <p>Loading page template</p>
        </div>
        {/* https://images.unsplash.com/photo-1533610067042-1cee3c403282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80 */}
      </section>

      <section id="text">
        <div className="containerMini">
          <h1>Full Width Pics</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti autem dolores dolorem atque, cupiditate magnam. Impedit, quaerat officia sit ullam accusantium, voluptatibus est rerum soluta sapiente, in voluptate vitae iusto!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis aliquam veritatis dolorem quasi necessitatibus aliquid, deleniti, nihil dolore cum libero magnam blanditiis voluptates recusandae quae dolorum, facilis sequi ipsam!</p>
        </div>
      </section>

        <section className="imgSection imgSection1"></section>

        <section id="text">
        <div className="containerMini">
          <h1>Full Width Pics</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti autem dolores dolorem atque, cupiditate magnam. Impedit, quaerat officia sit ullam accusantium, voluptatibus est rerum soluta sapiente, in voluptate vitae iusto!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis aliquam veritatis dolorem quasi necessitatibus aliquid, deleniti, nihil dolore cum libero magnam blanditiis voluptates recusandae quae dolorum, facilis sequi ipsam!</p>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>Lorem ipsum, dolor sit amet</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
