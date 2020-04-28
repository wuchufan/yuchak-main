import React from 'react';
import classes from './Article.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Article = ({
  articleInfo: {
    title,
    date,
    paragraphs,
    imagesURL
  },
  images
}) => {

  let wordCount = 0;
  let renderParagraphs = [];
  const wordLimit = 150;
  const articleURL = `/news/${title}`;

  for (let i = 0; i < paragraphs.length; i++) {

    for (let j = 0; j < paragraphs[i].length; j++) {

      if (paragraphs[i] === 'img')
        break;
      if (wordCount < wordLimit)
        wordCount++;
      else
        break;
      }
    if (paragraphs[i] !== 'img')
      renderParagraphs.push(<p className={classes['content']} key={i}>{paragraphs[i]}</p>);
    if (wordCount >= wordLimit)
      break;

    }

  return (<div className={classes['container']}>

    <Link to={articleURL}>
    <img className={classes['img']} src={images[0]} alt=''/>
    </Link>

    <div className={classes['container__text']}>

      <Link to={articleURL} className={classes['title']}>{title}</Link>

      <p className={classes['date']}>{date}</p>

      {renderParagraphs}

      <div className={classes['button']}>
        <Link to={articleURL}>
          Read more</Link>
      </div>
    </div>
  </div>);
}

Article.propTypes = {
  articleInfo: PropTypes.object.isRequired
}

export default Article;
