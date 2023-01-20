import React from "react";

export default function Date({ content }) {
  return (
    
    <div dangerouslySetInnerHTML={{__html: content}}/>
    
  );
}