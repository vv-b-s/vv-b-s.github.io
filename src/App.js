import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import GeneralCard from "./components/cards/GeneralCard";
import AboutComponent from "./components/about/AboutComponent";
import FeaturedComponent from "./components/featured/FeaturedComponent";

function App() {
    return (
        <div className="container-fluid">
            <div className="row mt-5 ml-3 mr-md-3 mr-sm-3 mr-3">
                {/*About*/}
                <div className="col-lg-3 mr-lg-4 col-md-12 col-sm-12 mb-3">
                    <GeneralCard className="row">
                        <AboutComponent/>
                    </GeneralCard>
                </div>

                {/*Featured*/}
                <GeneralCard className="col-lg-8 col-md-12 col-sm-12 py-5">
                    <FeaturedComponent/>
                </GeneralCard>
            </div>

        </div>
    );
}

export default App;
