import React, { Component } from 'react'

export class Contactlist extends Component {
    render() {
        const {name,phonenumber,email} = this.props.contact;
        return (
            <div className='container'>

                <ul className='list-group mb-3'>
                    <li className='list-group-item'>
                        <h4>{name} <i className="fas fa-sort-down"></i> </h4>
                    </li>
                    <li className='list-group-item'>
                       Email: {email}
                    </li>
                    <li className='list-group-item'>
                      PhoneNumber:  {phonenumber}
                    </li>

                </ul>
            </div>
        )
    }
}

export default Contactlist;

