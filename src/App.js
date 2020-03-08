import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import firebase from './api/Firebase';
import Topics from "./component/Topics"
import Home from './component/Home';


// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('learn-topics');
    this.refDetail = firebase.firestore();
    this.unsubscribe = null;
    this.state = {
      learning_topics: []
    };

    this.onCollectionUpdate = this.onCollectionUpdate.bind(this);

  }

  onCollectionUpdate = (querySnapshot) => {
    const learning_topics = [];
    querySnapshot.forEach((doc) => {
      const { name, description, code } = doc.data();
      learning_topics.push({
        key: doc.id,
        name,
        description,
        code
      });
    });
    console.log(learning_topics)
    this.setState({
      learning_topics
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const { learning_topics = [] } = this.state;
    return (
      <Router>
        <Container>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/home">
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <Link to="/learnings">Covered Topics</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>


          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/learnings">
              <Topics learning_topics={learning_topics} tRef={this.refDetail} />
            </Route>
          </Switch>
          <footer className="blockquote-footer">
             <cite title="Source Title">@deviator206</cite>
          </footer>
        </Container>
      </Router>
    );

  }

}



