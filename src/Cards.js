import React, { Component } from 'react';
import Card from './cardsData';

const cardList = [
    {
        name: 'lakjsdf',
        tag: '@lakjsdf'
    },
    {
        name: 'kela',
        tag: '@kela'
    }
]

const displayCardData = cardList.map((c, idx) => {
    return (
        <Card key={idx} index={idx} name={c.name} user={c.tag} />
    )
})


class DisplayCard extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="#">
                                <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" alt="Logo" />
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item is-active">
                                    Home
                                </a>
                                <a className="navbar-item">
                                    Examples
                                </a>
                                <a className="navbar-item">
                                    Features
                                </a>
                                <a className="navbar-item">
                                    Team
                                </a>
                                <a className="navbar-item">
                                    Archives
                                </a>
                                <a className="navbar-item">
                                    Help
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column has-text-centered">
                                {/* <h1 className="title" style="color: ghostwhite;">Bulma Card Layout Template</h1> */}
                            </div>
                        </div>
                        <div id="app" className="row columns is-multiline">
                            <div v-for="card in cardData" key="card.id" className="column is-4">
                                <div className="card large">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src="card.image" alt="Image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img src="card.avatar" alt="Image" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                            </div>
                                            <div className="content">
                                                <div className="background-icon"><span className="icon-twitter"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="container">
                            <div className="content has-text-centered">
                                <div className="soc">
                                    <a href="#"><i className="fa fa-github-alt fa-lg" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-youtube fa-lg" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                                </div>
                                <p>
                                    <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>.
                                    The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default DisplayCard;
