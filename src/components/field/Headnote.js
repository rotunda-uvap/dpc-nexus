import React from "react";

export default function Headnote({ content }) {
  return (
    <div dangerouslySetInnerHTML={{__html: content}}/>
  );
}