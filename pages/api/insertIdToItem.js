import { connectToDatabase } from '../../util/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    //const body = req.body;

    const objToInsert = {
        "root": {
            "text": null,
            "uuid": "root",
            "type": null,
            "itemIDs": [
                "e71bf199-3f93-47e6-9b09-ed0a2d8587a9",
                "b4438cba-e41d-49aa-ae09-401b64677269",
                "3d022ad0-6d37-4bcc-a024-916efe16a8ae",
                "7822413a-1943-4c36-b043-4d49993a9264",
                "ab8db47a-66c7-4276-9820-8f02022ed732",
                "d52f16cf-35b2-47c8-9de7-aabd49488d69",
                "06d25865-1708-4540-960b-fdf41cecc45d",
                "250e5355-377c-491e-b7c4-d8940fac6212",
                "7007bfc2-90a3-4069-9410-8c9c593bf994"
            ],
            "parentID": null,
            "paramName": "",
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": null,
            "paramAnnotatorCreated": false
        },
        "e71bf199-3f93-47e6-9b09-ed0a2d8587a9": {
            "text": "What is the ",
            "uuid": "e71bf199-3f93-47e6-9b09-ed0a2d8587a9",
            "type": "text",
            "itemIDs": [],
            "parentID": "root",
            "paramName": null,
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": null,
            "paramAnnotatorCreated": false
        },
        "b4438cba-e41d-49aa-ae09-401b64677269": {
            "text": "name",
            "uuid": "b4438cba-e41d-49aa-ae09-401b64677269",
            "type": "param",
            "itemIDs": [],
            "parentID": "root",
            "paramName": "metadata",
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": {
                "type": "enumeration",
                "initialValuesSelected": [
                    {
                        "textCandidate": "Rank\n                                                                \n                                                                    \n                                                                        \n                                                                            \n                                                                            \n                                                                        \n                                                                    \n                                                                \n                                                            ",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Name",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Net Worth",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Age",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Country / Territory",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Source",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Industry",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    }
                ],
                "candidateLists": [
                    [
                        {
                            "textCandidate": "Rank\n                                                                \n                                                                    \n                                                                        \n                                                                            \n                                                                            \n                                                                        \n                                                                    \n                                                                \n                                                            ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Name",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Net Worth",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Age",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Country / Territory",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Source",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Industry",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        }
                    ],
                    [
                        {
                            "textCandidate": "Name",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": ""
                        }
                    ],
                    [
                        {
                            "textCandidate": "Name",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]",
                            "commonXPathSuffix": "/div[1]"
                        }
                    ],
                    [
                        {
                            "textCandidate": "Name",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[2]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]",
                            "commonXPathSuffix": "/div[2]/div[1]/div[1]"
                        }
                    ],
                    [
                        {
                            "textCandidate": "Name",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[2]/div[2]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[2]/div[2]/div[1]/div[1]"
                        }
                    ]
                ],
                "possibleValues": [
                    {
                        "textCandidate": "Rank\n                                                                \n                                                                    \n                                                                        \n                                                                            \n                                                                            \n                                                                        \n                                                                    \n                                                                \n                                                            ",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Name",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Net Worth",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Age",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Country / Territory",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Source",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Industry",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    }
                ],
                "mostLeastAdjective": null,
                "color": "#ffe5e5"
            },
            "paramAnnotatorCreated": false
        },
        "3d022ad0-6d37-4bcc-a024-916efe16a8ae": {
            "text": " of the ",
            "uuid": "3d022ad0-6d37-4bcc-a024-916efe16a8ae",
            "type": "text",
            "itemIDs": [],
            "parentID": "root",
            "paramName": null,
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": null,
            "paramAnnotatorCreated": false
        },
        "7822413a-1943-4c36-b043-4d49993a9264": {
            "text": "lowest",
            "uuid": "7822413a-1943-4c36-b043-4d49993a9264",
            "type": "param",
            "itemIDs": [],
            "parentID": "root",
            "paramName": "superlative",
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": {
                "type": "superlative",
                "initialValuesSelected": [
                    {
                        "textCandidate": "most"
                    },
                    {
                        "textCandidate": "least"
                    }
                ],
                "candidateLists": [],
                "possibleValues": [
                    {
                        "textCandidate": "most"
                    },
                    {
                        "textCandidate": "least"
                    }
                ],
                "mostLeastAdjective": null,
                "color": "#f2ffe5"
            },
            "paramAnnotatorCreated": false
        },
        "ab8db47a-66c7-4276-9820-8f02022ed732": {
            "text": " ",
            "uuid": "ab8db47a-66c7-4276-9820-8f02022ed732",
            "type": "text",
            "itemIDs": [],
            "parentID": "root",
            "paramName": null,
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": null,
            "paramAnnotatorCreated": false
        },
        "d52f16cf-35b2-47c8-9de7-aabd49488d69": {
            "text": "rank",
            "uuid": "d52f16cf-35b2-47c8-9de7-aabd49488d69",
            "type": "param",
            "itemIDs": [],
            "parentID": "root",
            "paramName": "numeric",
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": {
                "type": "enumeration",
                "initialValuesSelected": [
                    {
                        "textCandidate": "Rank\n                                                                \n                                                                    \n                                                                        \n                                                                            \n                                                                            \n                                                                        \n                                                                    \n                                                                \n                                                            ",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Net Worth",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Age",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    }
                ],
                "candidateLists": [
                    [
                        {
                            "textCandidate": "Rank\n                                                                \n                                                                    \n                                                                        \n                                                                            \n                                                                            \n                                                                        \n                                                                    \n                                                                \n                                                            ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Name",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Net Worth",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Age",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Country / Territory",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Source",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        },
                        {
                            "textCandidate": "Industry",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                            "commonXPathSuffix": "/div[1]/div[1]"
                        }
                    ],
                    [
                        {
                            "textCandidate": "The Forbes World’s Billionaires list is a snapshot of wealth using stock prices and exchange rates from March 5, 2021. Some people become richer or poorer within days of publication. We list individuals rather than multigenerational families who share fortunes, though we include wealth belonging to a billionaire’s spouse and children if that person is the founder of the fortune. In some cases we list siblings or couples together if the ownership breakdown among them isn’t clear, but here an estimated net worth of $1 billion per person is needed to make the cut. We value a variety of assets, including private companies, real estate, art and more. We don’t pretend to know each billionaire’s private balance sheet (though some provide it). When documentation isn’t supplied or available, we discount fortunes. For daily updates of net worths, go to www.forbes.com/real-time-billionaires.",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[2]/p[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[2]/p[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]",
                            "commonXPathSuffix": "/div[2]/p[1]"
                        },
                        {
                            "textCandidate": "Special thanks to AlphaSense, FactSet Research Systems, LCH Investments, Orbis by Bureau Van Dijk, PitchBook Data, Real Capital Analytics, Reonomy, Sentieo, STR, S&P Capital IQ, VesselsValue and the other experts who helped us with our reporting and valuations, including Amnish Aggarwal, Prabhudas Lilladher; Steve Algermissen, Cushman & Wakefield; Rakesh Arora, Go India Advisors; Hok Yean Chee, HVS; Jasmine Chin, BOCI; Anand Date, HSBC; Mark Godfrey, CBRE; Melinda Hu, Bernstein; Sarah B. Potter, FactSet; Praveen Subramanya, Knight Frank; Tim Swannie, Home Hunts France; Douglas B. Taylor; Daniel Voellm, AP Hospitality Advisors, Joel Paige.",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[2]/p[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[2]/p[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]",
                            "commonXPathSuffix": "/div[2]/p[1]"
                        },
                        {
                            "textCandidate": "EDITOR: Kerry A. Dolan\n                                                 DEPUTY EDITORS: Chase Peterson-Withorn, Jennifer Wang\n                                                 COUNTRY EDITORS: Graham Button, Grace Chung, Russell Flannery, Naazneen Karmali, Nathan Vardi\n                                                 WEALTH TEAM: Angel Au-Yeung, Kenrick Cai, Deniz Çam, Maggie Chen, David Dawkins, Anastassia Gliadkovskaya, John Hyatt, Max Jedeur-Palmgren, Momina Khan, Sergei Klebnikov, Elaine Mao, Andrea Murphy, Krisztián Sándor, Ariel Shapiro, Giacomo Tognini, Hank Tucker, Lisette Voytko, Elena Berezanskaya and reporters at Forbes-licensed editions in Austria, the Czech Republic, Hungary, Kazakhstan, Mexico, Poland, Romania, Russia, Slovakia and Ukraine.\n                                                 REPORTERS: Susan Adams, Dan Alexander, Anderson Antunes, Megha Bahree, Nina Bambysheva, Margherita Beale, Madeline Berg, Justin Birnbaum, Tim Boreham, Igor Bosilkovski, Thomas Brewster, Nilgun Cavdar, Shu-Ching Jean Chen, Muhammad Cohen, Lachlan Colquhoun, Lauren Debter, Michael del Castillo, James Dunn, Steven Ehrlich, Amy Feldman, Antoine Gara, Eliza Haverstock, Christopher Helman, Alvaro Hernandez Zorrilla, Jane Ho, Katie Jennings, Jeff Kauflin, Sean Kilachand, Noah Kirsch, Alex Knapp, Alex Konrad, Nicole Lindsay, Katherine Love, Iain Martin, Anis Shakirah Mohd Muslimin, Suzy Nam, Lan Anh Nguyen, Alan Ohnsman, Robert Olsen, Phisanu Phromchanya, Jonathan Ponciano, Anu Raghunathan, Natalie Robehmed, Leah Rosenbaum, Matt Schifrin, Lucinda Schmidt, Leonard Schoenberger, James Simms, Chloe Sorvino, Deborah Steinborn, Jessica Tan, Michela Tindera, Ozer Turan, Elisa Valenta, Yue Wang, Jennifer Wells, Will Yakowicz, Itai Zehorai.\n                                                 RESEARCH: Sue Radlauer\n                                                 DESIGN DIRECTOR: Alicia Hallett-Chan\n                                                 DIRECTOR OF PHOTOGRAPHY: Robyn Selman\n                                                 PHOTO RESEARCH: Merrilee Barton, Gail Toivanen\n                                                 DESIGN: Nicholas DeSantis, Linda Tran Tutovan, Charles Brucaliere and Philip Smith\n                                                 VIDEO PRODUCERS: Kirsten Taggart, Meg Christensen, Juliet Muir, Jon Palmer, Matt Kang\n                                                 VIDEO DIRECTORS: Ivan Clow, Greg Andersson, Bernard Osei\n                                                 PRODUCT: Grant Tunkel, Nina Foroutan\n                                                 ENGINEERING: Gus Faria, Sarah Calande, Dmitri Slavinsky\n                                                 QA: Majd Alzoubi, Ronak Ray",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[3]/div[2]/p[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[2]/p[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]",
                            "commonXPathSuffix": "/div[2]/p[1]"
                        }
                    ],
                    [
                        {
                            "textCandidate": "It’s been a year like no other",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "real-time billionaires rankings",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]",
                            "commonXPathSuffix": ""
                        }
                    ],
                    [
                        {
                            "textCandidate": "Acknowledgements",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[2]/h3[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[2]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Special thanks to AlphaSense, FactSet Research Systems, LCH Investments, Orbis by Bureau Van Dijk, PitchBook Data, Real Capital Analytics, Reonomy, Sentieo, STR, S&P Capital IQ, VesselsValue and the other experts who helped us with our reporting and valuations, including Amnish Aggarwal, Prabhudas Lilladher; Steve Algermissen, Cushman & Wakefield; Rakesh Arora, Go India Advisors; Hok Yean Chee, HVS; Jasmine Chin, BOCI; Anand Date, HSBC; Mark Godfrey, CBRE; Melinda Hu, Bernstein; Sarah B. Potter, FactSet; Praveen Subramanya, Knight Frank; Tim Swannie, Home Hunts France; Douglas B. Taylor; Daniel Voellm, AP Hospitality Advisors, Joel Paige.",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[2]/p[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[2]",
                            "commonXPathSuffix": ""
                        }
                    ],
                    [
                        {
                            "textCandidate": "real-time billionaires rankings",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/*[INSERT-ROW-INDEX-HERE]/a[1]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]",
                            "commonXPathSuffix": "/a[1]"
                        }
                    ]
                ],
                "possibleValues": [
                    {
                        "textCandidate": "Rank\n                                                                \n                                                                    \n                                                                        \n                                                                            \n                                                                            \n                                                                        \n                                                                    \n                                                                \n                                                            ",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Net Worth",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    },
                    {
                        "textCandidate": "Age",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]/div[1]/div[1]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]",
                        "commonXPathSuffix": "/div[1]/div[1]"
                    }
                ],
                "mostLeastAdjective": null,
                "color": "#e5ffff"
            },
            "paramAnnotatorCreated": false
        },
        "06d25865-1708-4540-960b-fdf41cecc45d": {
            "text": " billionaire in the ",
            "uuid": "06d25865-1708-4540-960b-fdf41cecc45d",
            "type": "text",
            "itemIDs": [],
            "parentID": "root",
            "paramName": null,
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": null,
            "paramAnnotatorCreated": false
        },
        "250e5355-377c-491e-b7c4-d8940fac6212": {
            "text": "United States",
            "uuid": "250e5355-377c-491e-b7c4-d8940fac6212",
            "type": "param",
            "itemIDs": [],
            "parentID": "root",
            "paramName": "country",
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": {
                "type": "enumeration",
                "initialValuesSelected": [
                    {
                        "textCandidate": "All",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Algeria",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[2]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Argentina",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[3]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Australia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[4]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Austria",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[5]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Belgium",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[6]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Brazil",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[7]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Canada",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[8]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Chile",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[9]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "China",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[10]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Colombia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[11]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Cyprus",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[12]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Czechia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[13]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Denmark",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[14]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Egypt",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[15]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Eswatini (Swaziland)",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[16]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Finland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[17]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "France",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[18]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Georgia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[19]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Germany",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[20]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Greece",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[21]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Guernsey",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[22]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Hong Kong",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[23]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Hungary",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[24]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Iceland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[25]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "India",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[26]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Indonesia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[27]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Ireland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[28]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Israel",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[29]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Italy",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[30]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Japan",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[31]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Kazakhstan",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[32]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Lebanon",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[33]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Liechtenstein",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[34]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Macao",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[35]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Malaysia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[36]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Mexico",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[37]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Monaco",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[38]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Morocco",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[39]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Nepal",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[40]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Netherlands",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[41]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "New Zealand",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[42]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Nigeria",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[43]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Norway",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[44]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Oman",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[45]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Peru",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[46]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Philippines",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[47]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Poland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[48]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Portugal",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[49]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Qatar",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[50]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Romania",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[51]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Russia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[52]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Singapore",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[53]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Slovakia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[54]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "South Africa",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[55]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "South Korea",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[56]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Spain",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[57]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "St. Kitts and Nevis",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[58]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Sweden",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[59]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Switzerland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[60]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Taiwan",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[61]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Tanzania",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[62]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Thailand",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[63]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Turkey",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[64]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Ukraine",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[65]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "United Arab Emirates",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[66]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "United Kingdom",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[67]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "United States",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[68]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Venezuela",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[69]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Vietnam",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[70]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Zimbabwe",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[71]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    }
                ],
                "candidateLists": [
                    [
                        {
                            "textCandidate": "All",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Algeria",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[2]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Argentina",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[3]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Australia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[4]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Austria",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Belgium",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[6]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Brazil",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[7]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Canada",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[8]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Chile",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[9]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "China",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[10]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Colombia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[11]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Cyprus",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[12]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Czechia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[13]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Denmark",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[14]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Egypt",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[15]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Eswatini (Swaziland)",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[16]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Finland",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[17]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "France",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[18]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Georgia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[19]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Germany",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[20]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Greece",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[21]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Guernsey",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[22]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Hong Kong",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[23]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Hungary",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[24]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Iceland",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[25]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "India",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[26]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Indonesia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[27]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Ireland",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[28]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Israel",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[29]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Italy",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[30]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Japan",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[31]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Kazakhstan",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[32]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Lebanon",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[33]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Liechtenstein",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[34]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Macao",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[35]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Malaysia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[36]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Mexico",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[37]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Monaco",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[38]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Morocco",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[39]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Nepal",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[40]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Netherlands",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[41]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "New Zealand",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[42]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Nigeria",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[43]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Norway",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[44]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Oman",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[45]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Peru",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[46]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Philippines",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[47]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Poland",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[48]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Portugal",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[49]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Qatar",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[50]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Romania",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[51]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Russia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[52]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Singapore",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[53]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Slovakia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[54]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "South Africa",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[55]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "South Korea",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[56]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Spain",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[57]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "St. Kitts and Nevis",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[58]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Sweden",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[59]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Switzerland",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[60]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Taiwan",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[61]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Tanzania",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[62]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Thailand",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[63]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Turkey",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[64]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Ukraine",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[65]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "United Arab Emirates",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[66]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "United Kingdom",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[67]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "United States",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[68]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Venezuela",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[69]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Vietnam",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[70]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "Zimbabwe",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[71]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                            "commonXPathSuffix": ""
                        }
                    ],
                    [
                        {
                            "textCandidate": "United States",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "France",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[4]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "India",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[11]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Spain",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[12]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "China",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[14]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Mexico",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[17]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Japan",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[30]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Canada",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[34]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Germany",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[35]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Italy",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[41]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Hong Kong",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[44]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Russia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[52]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Austria",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[57]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Australia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[71]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Chile",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[75]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Singapore",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[77]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Sweden",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[85]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Indonesia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[87]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Thailand",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[104]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Czechia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[111]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "United Kingdom",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[114]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Brazil",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[115]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Netherlands",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[117]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Ireland",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[141]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "South Korea",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[148]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Denmark",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[162]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Malaysia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[172]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Nigeria",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[192]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Israel",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[199]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        },
                        {
                            "textCandidate": "Colombia",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[201]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/*[INSERT-ROW-INDEX-HERE]/div[5]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]",
                            "commonXPathSuffix": "/div[5]"
                        }
                    ],
                    [
                        {
                            "textCandidate": "1.",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        Jeff Bezos \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[2]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        $177 B\n                                                            \n                                                        \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[3]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        57\n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[4]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "United States",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        \n                                                            Amazon\n                                                            \n                                                        \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[6]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        Technology \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[7]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[2]",
                            "commonXPathSuffix": ""
                        }
                    ],
                    [
                        {
                            "textCandidate": "2.",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        Elon Musk \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/div[2]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        $151 B\n                                                            \n                                                        \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/div[3]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        49\n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/div[4]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "United States",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        \n                                                            Tesla, SpaceX\n                                                            \n                                                        \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/div[6]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        Automotive \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/div[7]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[3]",
                            "commonXPathSuffix": ""
                        }
                    ],
                    [
                        {
                            "textCandidate": "4.",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/div[1]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        Bill Gates \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/div[2]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        $124 B\n                                                            \n                                                        \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/div[3]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        65\n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/div[4]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "United States",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/div[5]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        \n                                                            Microsoft\n                                                            \n                                                        \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/div[6]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]",
                            "commonXPathSuffix": ""
                        },
                        {
                            "textCandidate": "\n                                                        Technology \n                                                    ",
                            "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/div[7]",
                            "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]/*[INSERT-ROW-INDEX-HERE]",
                            "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div[5]",
                            "commonXPathSuffix": ""
                        }
                    ]
                ],
                "possibleValues": [
                    {
                        "textCandidate": "All",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[1]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Algeria",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[2]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Argentina",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[3]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Australia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[4]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Austria",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[5]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Belgium",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[6]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Brazil",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[7]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Canada",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[8]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Chile",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[9]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "China",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[10]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Colombia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[11]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Cyprus",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[12]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Czechia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[13]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Denmark",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[14]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Egypt",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[15]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Eswatini (Swaziland)",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[16]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Finland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[17]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "France",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[18]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Georgia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[19]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Germany",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[20]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Greece",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[21]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Guernsey",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[22]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Hong Kong",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[23]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Hungary",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[24]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Iceland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[25]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "India",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[26]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Indonesia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[27]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Ireland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[28]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Israel",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[29]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Italy",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[30]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Japan",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[31]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Kazakhstan",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[32]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Lebanon",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[33]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Liechtenstein",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[34]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Macao",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[35]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Malaysia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[36]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Mexico",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[37]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Monaco",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[38]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Morocco",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[39]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Nepal",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[40]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Netherlands",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[41]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "New Zealand",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[42]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Nigeria",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[43]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Norway",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[44]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Oman",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[45]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Peru",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[46]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Philippines",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[47]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Poland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[48]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Portugal",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[49]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Qatar",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[50]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Romania",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[51]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Russia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[52]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Singapore",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[53]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Slovakia",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[54]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "South Africa",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[55]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "South Korea",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[56]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Spain",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[57]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "St. Kitts and Nevis",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[58]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Sweden",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[59]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Switzerland",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[60]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Taiwan",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[61]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Tanzania",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[62]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Thailand",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[63]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Turkey",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[64]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Ukraine",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[65]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "United Arab Emirates",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[66]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "United Kingdom",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[67]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "United States",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[68]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Venezuela",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[69]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Vietnam",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[70]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    },
                    {
                        "textCandidate": "Zimbabwe",
                        "xPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/li[71]",
                        "templateXPath": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]/*[INSERT-ROW-INDEX-HERE]",
                        "commonXPathPrefix": "/html/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[6]/div[1]/ul[1]",
                        "commonXPathSuffix": ""
                    }
                ],
                "mostLeastAdjective": null,
                "color": "#f2e5ff"
            },
            "paramAnnotatorCreated": false
        },
        "7007bfc2-90a3-4069-9410-8c9c593bf994": {
            "text": "?",
            "uuid": "7007bfc2-90a3-4069-9410-8c9c593bf994",
            "type": "text",
            "itemIDs": [],
            "parentID": "root",
            "paramName": null,
            "currentlySelected": false,
            "paramIsOptional": false,
            "paramMultipleValuesAllowed": false,
            "paramTypeData": null,
            "paramAnnotatorCreated": false
        }
    };

    const { db } = await connectToDatabase();
    
    /*await db
        .collection("tasks")
        .update(
            {
                "_id": ObjectId("62279331198c8c17bd40f112")
            },
            {$set: 
                {
                    "idToItem": objToInsert
                }
            }
        );*/
    
    res.status(200).send("Done");
}  