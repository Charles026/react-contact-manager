import React, { Component } from 'react'

class Contactlist extends Component {
    constructor() {
        super();
        this.state = {
            showContactInfo: true,
        }
    }

    onShowClick = (e) => {
        this.setState({ showContactInfo: !this.state.showContactInfo })
    };

    render() {
        const { name, phonenumber, email } = this.props.contact;

        return (
            <div className='container'>

                <ul className='list-group mb-3'>
                    <li className='list-group-item'>
                        <h4>{name}
                            <i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down"></i>
                        </h4>
                    </li>
                    {this.state.showContactInfo ? (
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                Email: {email}
                            </li>
                            <li className='list-group-item'>
                                PhoneNumber:  {phonenumber}
                            </li>
                        </ul>) : null}
                </ul>
            </div>
        )
    }
}

export default Contactlist;

