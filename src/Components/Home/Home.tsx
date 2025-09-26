import Card from "../Card/Card";

function Home() {

    
const pcImage = '/public/pc.png'; // Place your PC image in public/pc.png
const gpuImage = '/public/gpu.png'; // Place your GPU image in public/gpu.png

      return (<>
    <div className="homepage-bg">
      <div className="homepage-content">
        <div className="homepage-left">
          <button className="homepage-tab">Abuilds</button>
          <h1 className="homepage-title">Unmatched<br />Performance</h1>
          <p className="homepage-desc">
            Elevate your gaming, content creation, or business with high-performance new and refurbished PCs.<br />
            Whether you're looking for the latest cutting-edge technology or a budget-friendly refurbished option, we’ve got you covered
          </p>
          <div className="homepage-buttons">
            <button className="homepage-call">Call Now</button>
            <a className="homepage-learn" href="#">Learn more &rarr;</a>
          </div>
        </div>
        <div className="homepage-right">
          <img src={pcImage} alt="PC" className="homepage-pc" />
          <img src={gpuImage} alt="GPU" className="homepage-gpu" />
        </div>
      </div>
    </div>
    
</>


  );
}

export default Home;