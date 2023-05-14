import React, { Fragment, useState } from 'react'
import Post from './Post';
// import { Link } from "react-router-dom";
import {BsPlusCircleFill} from 'react-icons/bs'



const AddPost = () => {
  const [showModal, setShowModal] = useState(false);
  return ( 
    <Fragment>
    <button className="fixed border-0 right-12 bottom-12 group transition-transform hover:rotate-45" onClick={() => setShowModal(true)}>
        <BsPlusCircleFill size={70} color="orange" />
    </button>

    <Post isVisible={showModal} onClose={() =>
      setShowModal(false)} />
    </Fragment>
    
  )
}

export default AddPost;