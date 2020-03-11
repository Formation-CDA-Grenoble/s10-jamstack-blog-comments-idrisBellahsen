import React from 'react';




const CommentList = ({ commentaires }) =>
  <ul >
    {commentaires.map( (commentaire, index) =>
      <li key={index} >
       <p>{commentaire}</p>
      </li>
    )}
  </ul>
;

export default CommentList;