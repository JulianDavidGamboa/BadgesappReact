import React from 'react';

class BadgeForm extends React.Component {

    // state = {}

    handleClick = (e) => {
        console.log("Button has clicked");
    };

    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmit} autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            name="firstName" 
                            className="form-control"
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            name="lastName" 
                            className="form-control"
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="email" 
                            name="email" 
                            className="form-control"
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            name="jobTitle" 
                            className="form-control"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            type="text" 
                            name="twitter" 
                            className="form-control"
                            value={this.props.formValues.twitter}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>

        {this.props.error && <p className="text-danger">{ this.props.error.message }</p> }

                    <br/><br/>

                </form>
            </div>
        )
    }

}

export default BadgeForm;