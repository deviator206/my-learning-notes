import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


function Topics(props) {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    
    let { path, url } = useRouteMatch();
    const {learning_topics = []} = props;
    
    const getLinks = () => {
        const linksList = [];
        learning_topics.forEach(element => {
            linksList.push(
                <li>
                    <Link to={`${url}/${element.code}`}>{element.name}</Link>
                </li>
            );
        });
        return linksList;
    }
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {getLinks()}
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );

}




function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}


export default Topics;