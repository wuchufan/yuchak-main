import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Article from './Article/Article';
import classes from './News.module.scss';
import TitleImage from '../TitleImage/TitleImage';
import RecentPost from './RecentPost/RecentPost';
import content from './content.json';
import articleImages from './imgs';
import SideBar from './SideBar/SideBar';

const News = () => {

  const {articles} = content;


  return (<Fragment>
    <TitleImage route='news' showTitle3={false}/>
    <section className={classes['container']}>
      <div className={classes['articles']}>
        {
          articles.map((article, i) => {
            if (!articleImages[i])
              return
            return <Article images={articleImages[i]} articleInfo={article} key={i}/>
          })
        }

      </div>
      <SideBar articleImages = {articleImages} articles={articles}/>
    </section>
  </Fragment>);
}

export default News;
