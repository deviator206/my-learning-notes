import React, { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import ViewResolver from './ViewResolver';


export default function TopicDetail(props) {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
    const [topicDetails, setTopicDetails] = useState([]);
    useEffect(() => {
        const { tRef } = props;
        const detailInfo = tRef.collection('details_' + topicId);
        detailInfo.onSnapshot((querySnapshot) => {
            const learning_topics = [];
            querySnapshot.forEach((doc) => {
                const { primary, secondary, layout } = doc.data();
                learning_topics.push({
                    key: doc.id,
                    primary,
                    secondary, 
                    layout
                });
            });
            console.log(learning_topics);
            setTopicDetails(learning_topics)
        });
    }, [topicId]);

    const getMeSecondaryContent = (secondary) => {
        const secondaryContent = [];
        for (const [key, value] of Object.entries(secondary)) {
            secondaryContent.push(
                <p>
                    <span>{key} : </span><span style={{color:"green"}}>{value}</span>
                    
                </p>
            )
        }
        return secondaryContent;
    }
    // {c.secondary && getMeSecondaryContent(c.secondary)}
    // <h2>{c.primary} </h2>
    // <h3>{topicId}</h3>
    return (
        <div>
            {topicDetails.map((c, index) => (
                <div>
                    {c.layout && ViewResolver.getResolvedPageContent(c.layout)}
                    {!c.layout && c.secondary && getMeSecondaryContent(c.secondary)}
                </div>

            ))}

        </div>
    );
}
