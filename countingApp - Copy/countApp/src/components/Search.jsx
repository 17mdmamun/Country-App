
import React, {useState, useEffect} from 'react'

export default function Search(props) {
const [searchText, setSearchText]
= useState("");

const handleChange =(e)=>{
    setSearchText(e.target.value);
};

useEffect(()=>{
    props.onSearch(searchText)
},[searchText])

  return (
    <div style ={{textAlign:"center"}}>
      <input type="text" placeholder='Search Country' value={searchText} onChange={handleChange} />
    </div>
  )
}
