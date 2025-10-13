import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import './Builds.css'

function Builds() {

    return <>
  <section className="builds" id="builds">
        <div className="builds-container">
            <div className="text-container">
                <h1>Builds</h1>
                <h2>Affordable PCs to meet any budget</h2>
                <h3>Don't see the budget or specs you're looking for? <a href="https://calendar.app.google/66tLJVs1HmYPazFMA" rel="noopener noreferrer" target="_blank">Contact Us</a> for a custom build!</h3>
            </div>
            <div className="cards-container">
                <Card
                    title="Starter Build"
                    price="$750"
                    description="Refurbished build perfect for getting started."
                    bullets={["RTX 3060 or better", "16GB DDR4 Memory", "256GB NVMe SSD", "1TB HDD", "Windows 11"]}
                />
                <Card
                    title="Performance Build"
                    price="$1500"
                    description="Ready for anything"
                    bullets={["RTX 4070 or better", "I7 or Ryzen 7 CPU", "32GB DDR5 Memory", "1TB NVMe SSD", "Windows 11"]}
                />
                <Card
                    title="High-End Build"
                    price="$2500"
                    description="Build your dream machine"
                    bullets={["RTX 5080 or better", "Core 7 or Ryzen 9 CPU", "32GB DDR5 Memory", "2TB NVMe SSD", "Windows 11"]}
                />
            </div>
            </div>
        </section>
        <Contact />
    </>
}

export default Builds;