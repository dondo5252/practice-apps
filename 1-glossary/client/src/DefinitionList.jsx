import React from "react";
import DefinitionListEntry from "./DefinitionListEntry.jsx"

var DefinitionList = (props) => {


  return (

    <ul>
     {props.glossary.map((definition, index) =>
     <DefinitionListEntry key={index}  value={definition} deleteDef={props.deleteDef} patch={props.patch}/>
     )}
    </ul>
  )
}
export default DefinitionList