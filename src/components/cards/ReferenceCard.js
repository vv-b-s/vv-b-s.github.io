import React from 'react';
import InfoCard from "./InfoCard";
import ReferenceIcon from "../reficon/ReferenceIcon";

class ReferenceCard extends React.Component {
    constructor({title, iconBlueprints}) {
        super();

        this.state = {
            title, iconBlueprints
        }
    }

    render() {
        let iconViews = [];
        for (let i = 0; i < this.state.iconBlueprints.length; i++) {
            let icon = this.state.iconBlueprints[i];
            let isLastIcon = i === this.state.iconBlueprints.length - 1;

            iconViews.push(<ReferenceIcon
                headlineWrapperClass={isLastIcon ? '' : 'mr-lg-3 mr-md-5 mr-sm-5 mr-3'}
                iconClass={icon.iconClass} href={icon.href}
                hoverColor={icon.hoverColor}
                iconColor={icon.iconColor}/>)
        }

        return (
            <InfoCard className="row mx-3 mb-5 py-3">
                <div className="col">
                    <h4>{this.state.title}</h4>
                    <div className="row d-flex justify-content-center">
                        {iconViews}
                    </div>
                </div>
            </InfoCard>
        );

    }

}

export default ReferenceCard;