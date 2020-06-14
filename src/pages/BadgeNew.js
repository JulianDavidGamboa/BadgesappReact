import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
import avatar from '../images/Profile1.jpg';
import api from '../api';

class BadgeNew extends React.Component {

    state = {
    loading: false,
    error: null,
    form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    } };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: null });

        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }

    }

    handleChange = e  => {
        // const nextForm = this.state.form;
        
        // nextForm[e.target.name] = e.target.value;

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    };

    render() {

        if (this.state.loading) {
            return <PageLoading />;
        }

        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid BadgeNew__hero-image" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatar={avatar}
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}


export default BadgeNew;