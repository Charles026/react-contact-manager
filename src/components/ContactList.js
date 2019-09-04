import React, { Component, Fragment } from 'react'

class Contactlist extends Component {
    constructor() {
        super();
        this.state = {
            showContactInfo: false,
        }
    }

    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo })
    };

    render() {
        const { name, phonenumber, email } = this.props.contact;

        return (
            <div className='container'>

                <ul className='list-group mb-3'>
                    <li className='list-group-item'>
                        <span style={{ fontSize: '23px' }}>{name} </span>

                        <i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down" style={{ color: 'grey' }}></i>


                        <i onClick={() => { console.log('hello') }} className="fas fa-trash-alt" style={{ float: 'right', color: '#e6515f' }}></i>

                    </li>
                    {this.state.showContactInfo ? (
                        <Fragment>
                            <li className='list-group-item'>
                                Email: {email}
                            </li>
                            <li className='list-group-item'>
                                PhoneNumber:  {phonenumber}
                            </li>
                        </Fragment>) : null}
                </ul>
            </div >
        )
    }
}

export default Contactlist;

