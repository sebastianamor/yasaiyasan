import { Component } from "react";

const styles = {
    logo: {
        fontWeigth : '700',
        fontSize : "2rem",
    }
}

class Logo extends Component {
    render () {
        return (
            <div style={styles.logo}>
                お店
            </div>
        )
    }
}

export default Logo;