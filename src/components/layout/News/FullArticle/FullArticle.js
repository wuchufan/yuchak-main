import React from 'react';
import content from '../content.json';
import imgs from '../imgs';
import classes from './FullArticle.module.scss';
import { getCurrentArticle } from '../../../utilities/getCurrentArticle';
import SideBar from '../SideBar/SideBar';


const FullArticle = ({
  match: {
    params: {
      title
    }
  }
}) => {
  const { articles } = content;
  const {article, indexOfArticle} = getCurrentArticle(articles,title);
  const { date, paragraphs } = article;
  let imgIndex = 0;


  return (
    <section className={classes['section-full-article']}>
      <div className={classes['container']}>
        <div className={classes['article']}>
          <h1 className={classes['article__title']}>
            {title}
          </h1>
          <p className={classes['article__date']}>
            {date}
          </p>
          {paragraphs.map((paragraph,index)=>{
            if(paragraph === 'img') {

              return <img className={classes['article__image']}  key={`img${index}`} alt='' src={imgs[indexOfArticle][imgIndex++]}/>;
            }
            return <p className={classes['article__paragraph']} key={index}>{paragraph}</p>
          })}
        </div>
        <SideBar articles = {articles} articleImages={imgs}/>
      </div>

  </section>);
}

export default FullArticle;
