import React from 'react';
import { default as ComponentConfig } from './component.config';
import { CodeSnippet, Row, Column, Accordion, AccordionItem } from 'carbon-components-react';

export default class ViewResolver {
    static getResolvedPageContent(multipleComponentList) {
        const pageContent = [];
        for (const key in multipleComponentList) {
            const singleComponent = this.getPlacementGrid(multipleComponentList[key]);
            pageContent.push(singleComponent);
        }
        return pageContent;
    }

    static getSinglePlacementGrid(singleMetaObject, sameRow) {
        const placementInfo = (singleMetaObject.placement) ? singleMetaObject.placement.split("_") : [];
        let gridInfo = [];
        if (placementInfo.length > 0) {
            const min=1; 
    const max=5000;
            const random = Math.floor(Math.random() * (+max - +min)) + +min; 
            let RowComponent ;
            if (!sameRow) {
                RowComponent = (placementInfo[0].toUpperCase() === 'ROW') ?
                (<Row key={random}>
                    {
                        (placementInfo[1].toUpperCase() === 'COL') ?
                            (<Column
                                md={(parseInt(placementInfo[2]))}>
                                {this.getResolvedView(singleMetaObject)}
                            </Column>) :
                            <span>
                                ## CONDITION 2: Column #
                                </span>
                    }
                </Row>) :
                (<p> ## CONDITION 1 : Row#</p>)

            } else {
                RowComponent = (placementInfo[1].toUpperCase() === 'COL') ?
                            (<Column
                                md={(parseInt(placementInfo[2]))}>
                                {this.getResolvedView(singleMetaObject)}
                            </Column>) :
                            <span>
                                ## CONDITION 2: Column #
                                </span>
                
            }
            gridInfo.push(RowComponent);

        }
        return gridInfo;
    }
    static getPlacementGrid(singleMetaObject) {
        if(!singleMetaObject.length) {
            return this.getSinglePlacementGrid(singleMetaObject);
        } else if(singleMetaObject.length) {
            const listOfElement = [];
            singleMetaObject.forEach(singleMO => {
                listOfElement.push(this.getSinglePlacementGrid(singleMO , 'SAME_ROW'));
            });
            return (
                <Row>
                    {listOfElement}
                </Row>
            );
        }
    }

    static getIteratedValues (singleMetaObjectValue) {
        if(!singleMetaObjectValue.length) {
            return singleMetaObjectValue;

        } else if(singleMetaObjectValue.length) {
            const iteratedValues = [];
            singleMetaObjectValue.forEach(singleValue => {
                iteratedValues.push(this.getResolvedView(singleValue))
            })
            return iteratedValues;
        }

    }

    static getResolvedView(singleMetaObject) {
        let storyBookComponent;
        /**
          "component": "HEADER",
          "placement": "row_col_100",
          "value": "MicroServices In Depth"
         */
        switch (singleMetaObject.component.toUpperCase()) {
            case 'ACCORDIONITEM':
                storyBookComponent = (<AccordionItem
                    title={singleMetaObject.title}
                >{singleMetaObject.value}
                </AccordionItem>)
                break;
            case 'ACCORDION':
                storyBookComponent = (<Accordion
                    align="start"
                >{this.getIteratedValues(singleMetaObject.value)}
                </Accordion>)
                break;
            case 'CODESNIPPET':
                storyBookComponent = (<CodeSnippet
                    light
                    onClick={function noRefCheck() { }}
                    showLessText="Show less"
                    showMoreText="Show more"
                    type="multi"
                >{singleMetaObject.value}
                </CodeSnippet>)
                break;
            case 'P':
                storyBookComponent = (<p>
                    {singleMetaObject.value}
                </p>);
                break;
            case 'HEADER':
                storyBookComponent = (<h3>
                    {singleMetaObject.value}
                </h3>);
                break;
            default:
                storyBookComponent = (<span>
                    {singleMetaObject.value}
                </span>);
                break;
        }
        return storyBookComponent
    }
}