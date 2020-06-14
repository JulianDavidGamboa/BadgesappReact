import React from 'react';

import logoLeft from '../images/badge-header.svg';
import './styles/Home.css';

class Home extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <div className="row RowHome">
                        <div className="col">
                            <img src={logoLeft} alt="logo"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}


export default Home;