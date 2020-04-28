import React from 'react';
import { Link } from 'react-router-dom';
import classes from './RecentPost.module.scss';

const RecentPost = ({image,title,date}) => {
  const articleURL = `/news/${title}`;

  return (
    <div className={classes['container']}>
      <Link to={articleURL}>

      <img className={classes['container__img']} src={image} alt=''/>
      </Link>
      <Link to={articleURL}>
      <h1 className={classes['container__title']}>
        {title}
      </h1>
      </Link>
      <p className={classes['container__date']}>{date}</p>

    </div>
  );
}



export default RecentPost;
