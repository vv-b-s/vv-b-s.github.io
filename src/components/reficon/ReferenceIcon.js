import React from 'react'

class ReferenceIcon extends React.Component {
    constructor({iconClass, href, iconColor, hoverColor, headlineWrapperClass}) {
        super();

        const idleStyle = {
            color: iconColor,
        };

        const hoverStyle = {
            color: hoverColor,
            textDecoration: 'unset'
        };

        this.state = {
            className: headlineWrapperClass,
            iconClass: iconClass,
            href: href,
            idleStyle: idleStyle,
            style: idleStyle,
            hoverStyle: hoverStyle
        };
    }

    onMouseEnter = event => {
        event.preventDefault();
        this.setState({
            style: this.state.hoverStyle
        })
    };

    onMouseLeave = event => {
        event.preventDefault();
        this.setState({
            style: this.state.idleStyle
        })
    };

    render() {
        return (
            <h1 className={this.state.className}>
                <a style={this.state.style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <i className={this.state.iconClass}></i>
                </a>
            </h1>
        );
    }
}

export default ReferenceIcon;