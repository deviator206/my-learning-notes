import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import TopicDetail from './TopicDetail';

function Topics(props) {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    
    let { path, url } = useRouteMatch();
    const {learning_topics = [], tRef} = props;
    
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
            <h2>My Notes</h2>
            <ul>
                {getLinks()}
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <TopicDetail tRef={tRef} />
                </Route>
            </Switch>
        </div>
    );

}




export default Topics;