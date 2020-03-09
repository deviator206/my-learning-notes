import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import ViewResolver from './ViewResolver';
import {Grid} from 'carbon-components-react';

export default class GeneratedView extends React.Component {
  getDynamicContent() {
    const uiMetaData = {
      "key": "29IePqG7jiWz4GtlrbAu",
      "primary": "Understanding the communication between Microservices",
      "layout": {
        "0": {
          "component": "HEADER",
          "placement": "row_col_12",
          "value": "MicroServices In Depth"
        },
        "1": [{
          "component": "TEXT",
          "placement": "row_col_2",
          "value": "ms command"
        },{
          "component": "CodeSnippet",
          "placement": "row_col_6",
          "value": "@mixin grid-container {dth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rig dth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rig  dth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rig  dth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rig  dth: 100%;padding-rigdth: 100%;padding-rigdth: 100%;padding-rig dth: 100%;padding-rigdth: 100%;padding-rigwidth: 100%;padding-right: padding(mobile);padding-left: padding(mobile);padding-right: padding(xs)};"
        }],
        "2": {
          "component": "TEXT",
          "placement": "row_col_12",
          "value": "Key Features of the microservices"
        },
        "3": {
          "component": "ACCORDION",
          "placement": "row_col_6",
          "value": [
            {
              "component": "ACCORDIONITEM",
              "placement": "row_col_6",
              "title":" this is 1st label",
              "value": "@mixin grid-container {width: 100%;padding-right: padding(mobile);padding-left: padding(mobile);padding-right: padding(xs)};"
            },
            {
              "component": "ACCORDIONITEM",
              "placement": "row_col_6",
              "title":" this is 2nd label",
              "value": "@mixin grid-container {width: 100%;padding-right: padding(mobile);padding-left: padding(mobile);padding-right: padding(xs)};"
            }
          ]
        }
      }
    }

    return ViewResolver.getResolvedPageContent(uiMetaData.layout);
  }  
  render() {
    
        return (
          <React.Fragment>
            <Jumbotron>
              <h1>Hello!</h1>
              <p>
                I am Sandeep, working as a Frontend Architect. Also working on multiple other technologies.
          </p>
         
            </Jumbotron>
            <Grid>
            {this.getDynamicContent()}
            </Grid>
             
          </React.Fragment>
            
          )
    }

}