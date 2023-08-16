import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import {Link} from 'react-router-dom'


const List = () => {
  const [postClient, setPostClient] = useState([]);

  const fetchRating = () => {
    fetch('http://localhost:3004/comments')
      .then((response) => response.json())
      .then((data) => {
        setPostClient(data);
      });
  };
  useEffect(() => {
    fetchRating();
  }, []);
  return(
   <><table> 
      <thead>
        <tr>
          <th>Rating</th>
          <th>Name</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
      {postClient?.map((post) => (
        <tr key={post.id}>
          <td>{post.rating}</td>
          <td>{post.author}</td>
          <td>{post.comment}</td>
        </tr>
      ))}</tbody>
    </table>
    <Link to='/'><button className={styles.buttonBack}>Voltar</button></Link>
    </>
  )
  
};

export default List;
