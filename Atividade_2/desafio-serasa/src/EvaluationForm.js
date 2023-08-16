import React, { useState } from 'react';
import styles from './Main.module.css';
import logo from './img/serasa-logo-full.svg';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

const EvaluationForm = () => {
  const stars = Array(5).fill(0);
  const [rating, setRating] = useState(0);
  const [houverValue] = useState(undefined);
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  const handleClick = (value) => {
    setRating(value);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    const id = Math.random() * 11;
    fetch('http://localhost:3004/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, rating, author, comment }),
    }).then(() => {
      window.location.replace('http://localhost:3000/list');
    });
  };
  return (
    <div className={styles.mainDiv}>
      <header className={styles.header}>
        <img className={styles.imgLogo} src={logo} alt="logo" />
      </header>
      <div className={styles.divForm}>
        <img className={styles.logoForm} src={logo} alt="logo" />
        <p>Conte o quanto você está sastifeito com nossos serviços</p>
        <h2>Marque de 1 à 5 estrelas</h2>
        <div className={styles.rating}>
          <section className={styles.stars}>
            <form onSubmit={handleOnClick}>
              {stars.map((_, index) => {
                return (
                  <FaStar
                    className={styles.starColor}
                    key={index}
                    color={
                      (houverValue || rating) > index
                        ? colors.orange
                        : colors.grey
                    }
                    onClick={() => handleClick(index + 1)}
                  />
                );
              })}
              <label className={styles.labelName} htmlFor="">
                Nome
              </label>
              <input
                className={styles.inputName}
                type="text"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
              <label className={styles.labelComment} htmlFor="">
                Comentário (opcional)
              </label>
              <input
                className={styles.inputComment}
                type="text"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
              <button type="submit" className={styles.button}>
                Enviar avaliação
              </button>
              <Link to="/List">
                <button className={styles.buttonView}>
                  Visualizar Avaliações
                </button>
              </Link>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EvaluationForm;
