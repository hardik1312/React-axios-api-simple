import React from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {FaEnvelope, FaPhone,FaMapMarkedAlt} from 'react-icons/fa';

const MyCard = ({details})=>{
    return (
        <Card>
            <CardBody className='text-center'>
            <img height='150' width='150'
            className='rounded-circle img-thumbnail border-danger'
            src={details.picture?.large}
            alt=''
            />
            <CardTitle>
                <h2>
                    <span>{details.name?.title}</span> 
                    <span>{details.name?.first}</span> 
                    <span>{details.name?.last}</span> 
                </h2>
            </CardTitle>
            <CardText>
                <FaMapMarkedAlt/>
                {details.location?.city}
                <p>{details.phone}</p>
                <FaEnvelope/>
                {details.email}
            </CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard;