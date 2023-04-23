import React from 'react'
import { Link } from "react-router-dom";
import {BsPlusCircleFill} from 'react-icons/bs'

const AddPost = () => {
  return (
    
    <div className="fixed right-12 bottom-12 group transition-transform hover:rotate-45">
        <Link to='/post'><BsPlusCircleFill size={70} color="orange" /></Link>
    </div>

    
  )
}

export default AddPost;