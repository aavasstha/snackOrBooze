import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>Choose what you'd like to explore:</p>
          <div>
            <Link to="/snacks">
              <Button color="primary" className="m-2">View Snacks</Button>
            </Link>
            <Link to="/drinks">
              <Button color="secondary" className="m-2">View Drinks</Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
