import React from 'react'
import { Link } from "react-router-dom";
import {BsPlusCircleFill} from 'react-icons/bs'

const AddPost = () => {
  return (
    <div className="fixed bottom-20 right-44 transition-transform hover:rotate-45">
    <div className="cursor-pointer">
    <Link to='/post'><BsPlusCircleFill size={70} color="orange" /></Link>
    </div>
    </div>
  )
}

export default AddPost;