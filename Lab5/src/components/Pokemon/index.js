import React from "react"

class Pokemon extends React.Component {
    constructor(props) {
    super(props);
    };

    render() {
        return (
        
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>ID:  {this.props.id}</h3>
                <img src={this.props.sprites} />
            </div>

        )
    }
}

export default Pokemon