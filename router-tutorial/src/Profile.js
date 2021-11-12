import React from "react";
import { useParams } from "react-router";

const data={
  velopert:{name:'송지하', description:'react를 좋아하는 개발자'},
  gildong:{name:'홍길동', description:'고전 소설 홍길동전의 주인공'}
};

const Profile=()=>{
  const {username}=useParams();
  console.log('1 : '+{username}.username);
  const profile=data[username];
  console.log('2: '+{profile})
  if(!profile){
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return(
    <div>
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile;