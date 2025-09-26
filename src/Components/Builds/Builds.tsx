import Card from "../Card/Card";
import './Builds.css'

function Builds() {

    return <>
        <div className="builds-container">
            <div className="text-container">
                <h1>Builds</h1>
                <h2>Affordable PCs to meet any budget</h2>
                <h3>Don't see the budget you're looking for? Contact us for a custom build!</h3>
            </div>
            <div className="cards-container">
                <Card
                    title="Starter Build"
                    image="https://via.placeholder.com/340x180"
                    description="This is a sample card description."
                    bullets={["Point 1", "Point 2", "Point 3"]}
                />
                <Card
                    title="Performance Build"
                    image="https://via.placeholder.com/340x180"
                    description="This is a sample card description."
                    bullets={["Point 1", "Point 2", "Point 3"]}
                />
                <Card
                    title="High-End Build"
                    image="https://via.placeholder.com/340x180"
                    description="This is a sample card description."
                    bullets={["Point 1", "Point 2", "Point 3"]}
                />
            </div>
        </div>
    </>
}

export default Builds;