import React from 'react'
const Comment = ({ data }) => {
  console.log(data)

  return (
    <>

      {
  
         data.map((Element)=>{
         return(
          <div className="comment">
          <h6>Name :{Element.title}</h6>
          <p>Comment :{Element.text}</p>

        </div>

       )
       })
      }
    </>
  );
};

export default Comment;
