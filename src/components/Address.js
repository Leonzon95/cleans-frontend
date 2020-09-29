import React from 'react';
import {Card} from 'react-bootstrap'

const Address = props => {
    const address = props.address;
    return (
        <Card id={address.id}>
            <Card.Body>
                <Card.Title as="h5">{address.name}</Card.Title>
                <Card.Text>
                    {address.streetAddress}<br/>
                    {address.city}, {address.state} {address.country} {address.zipcode}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Address;