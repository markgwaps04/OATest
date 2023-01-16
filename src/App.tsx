
 import logo from "./images/logo.png";
 import hero from "./images/hero-photo.jpg"

const showModal = function(e : React.SyntheticEvent) {
  const target = e.target as Element;
   const modal = Array.from(document.getElementsByClassName("modal")) as Array<Element>;
   modal.forEach( (ele : Element)  => ele.classList.remove('hide'))
}

function App() {
  return (
    <div className="body">  

    <header>
      <nav>
    
        <a href="/"><img src={logo} alt="logo" className="logo"/></a>
     
        <a href="/" className="about">About OA</a>

        <a href="/" className="about">About SP</a>

        <button className="login">Login</button>
      </nav>
    </header>


    <div className="hero-section">


      <h1>Data to enrich your <span className="hero-title-blue">offshore business</span></h1>

      <p className="hero-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>

      <div className="cta">
      <button className="btn hero-button started" onClick={showModal}>Get Started</button>
      <button className="btn hero-button leads">View recent leads</button>
      </div>


      <img src={hero} alt="Hero background" className="hero-background" />
     
    </div>
   
    </div>
  );
}

export default App;
 