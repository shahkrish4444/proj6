import React, { useState } from "react";

import Comment from "./component/Comments";
import CommentForm from "./component/Comment";
import'./component/style.css'
function App() {
  const [data,setData] = useState([])
  return (
    <>
     <CommentForm data={data} setData={setData} />
     <Comment data={data}  />

    </>
  );
}

export default App;
