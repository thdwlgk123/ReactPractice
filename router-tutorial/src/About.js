import React from "react";
import qs from 'qs';

const About=({location})=>{
  const query=qs.parse(location.search,{
    ignoreQueryPrefix:true
  })
  const showDetail=query.detail==='true'
  return(
    <div>
      <h1>Introduce</h1>
      <p>This is a project to practice basic router</p>
    </div>
  )
}

export default About;