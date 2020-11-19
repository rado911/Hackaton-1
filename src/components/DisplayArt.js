import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const DisplayArt = ({webImage, title, principalOrFirstMaker}) => {
  return (
    
      <Card style={{maxHeight:"600px", width:"20%", textAlign:"center", margin:"2%"}}>
        <CardImg style={{maxHeight:"250px", width:"100%"}} src={webImage.url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
  <CardSubtitle tag="h6" className="mb-2 text-muted">{principalOrFirstMaker}</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    
  );
};

export default DisplayArt;
