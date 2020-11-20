import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './DisplayArt.css'

const DisplayArt = ({webImage, title, principalOrFirstMaker, objectNumber}) => {
  return (
    
      <Card className="resultCard" style={{maxHeight:"600px", width:"20%", textAlign:"center", margin:"2%"}}>
        <CardImg style={{maxHeight:"250px", width:"100%"}} src={webImage.url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
  <CardSubtitle tag="h6" className="mb-2 text-muted">{principalOrFirstMaker}</CardSubtitle>
  <Link to={{pathname:`/search/${objectNumber}`,
            state:"select"}}>
                <Button className="seeMore">See More</Button>
    </Link>
        </CardBody>
      </Card>
    
  );
};

export default DisplayArt;
