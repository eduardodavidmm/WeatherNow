import React from "react";

class Form extends React.Component {
    render() {
        return(
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="Ciudad..."/>
                    <input type="text" name="country" placeholder="Pais..."/>
                    <button>Obtener Clima</button>
                </form>
        );
    }
};

export default Form;
