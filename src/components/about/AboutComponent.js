import React from 'react';
import avatar from './avatar.jpg';
import './AboutComponent.css'
import InfoCard from "../cards/InfoCard";
import ReferenceCard from '../cards/ReferenceCard';
import ReferenceIconBlueprint from "../reficon/ReferenceIconBlueprint";

class AboutComponent extends React.Component {

    ReferenceCards = [
        {
            title: "Contact",
            icons: [
                new ReferenceIconBlueprint('fas fa-envelope', 'mailto:valentin@vv-b-s.com', '#ffbf00', '#ffd908'),
                new ReferenceIconBlueprint('fab fa-skype', 'skype:valentin.v_97', 'deepskyblue', '#07d5ff'),
                new ReferenceIconBlueprint('fab fa-discord', 'discord:Brain Stew#1101', 'rebeccapurple', '#8238ba')
            ]
        },

        {
            title: "Social media",
            icons: [
                new ReferenceIconBlueprint('fab fa-linkedin', 'https://www.linkedin.com/in/valentin-vasilev-25367211b/', 'dodgerblue', '#12b2ff'),
                new ReferenceIconBlueprint('fab fa-medium', 'https://medium.com/@valentin.v1997', 'black', 'darkgray'),
                new ReferenceIconBlueprint('fab fa-instagram', 'https://instagr.am/brainstew_x_x', '#FC00AA', '#fc10f4')
            ]
        },

        {
            title: "Git",
            icons: [
                new ReferenceIconBlueprint('fab fa-github', 'https://github.com/vv-b-s', 'black', 'darkgrey'),
                new ReferenceIconBlueprint('fab fa-gitlab', 'https://gitlab.com/vv-b-s', 'darkorange', '#ffa309'),
                new ReferenceIconBlueprint('fab fa-bitbucket', 'https://bitbucket.org/%7Bb4e8bcb1-ffe1-4175-b9f3-16b627ccb758%7D/', 'blue', 'lightskyblue')
            ]
        }
    ];


    render() {
        return (
            <div className="col">
                <div className="row d-flex justify-content-center m-5">
                    <img src={avatar} className="card-img-top img-circle rounded-circle"
                         alt="Valentin's photo. Looks like a guy tired from mountain hike making a selfie."/>
                </div>
                <div className="row">
                    <div className="col about-info">
                        <div className="row">
                            <div className="col">
                                <h2>Valentin Vasilev</h2>
                            </div>
                        </div>

                        <InfoCard className="row mx-3 mb-5 py-3">
                            <div className="col">
                                <div className="d-flex justify-content-center mb-2">
                                    <h4 className="mr-5" style={{color: '#946746'}}><i className="fas fa-briefcase"></i>
                                    </h4>
                                    <h4 className="mr-5" style={{color: 'darkgreen'}}><i className="fas fa-code"></i>
                                    </h4>
                                    <h4 style={{color: '#b33945'}}><i className="fab fa-java"></i></h4>
                                </div>
                                <h4 className="occupation-text">Full-stack developer</h4>
                                <h4 className="occupation-text"><a href="https://vida-soft.com">VIDA Software LTD</a>
                                </h4>
                            </div>
                        </InfoCard>

                        {this.ReferenceCards.map(card => <ReferenceCard title={card.title} iconBlueprints={card.icons}/>)}

                    </div>

                </div>
            </div>
        );
    }

}


export default AboutComponent;