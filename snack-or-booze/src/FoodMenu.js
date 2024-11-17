import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ item, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {item.map(i => (
              <Link to={`/${title.toLowerCase()}/${i.id}`} key={i.id}>
                <ListGroupItem>{i.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
        <Link to={`/add-item/${title.toLowerCase()}`} className="btn btn-primary add-item-button">
          Add {title}
        </Link>
      </Card>
    </section>
  );
}

export default FoodMenu;
