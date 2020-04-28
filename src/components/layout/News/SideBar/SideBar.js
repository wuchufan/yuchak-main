import React from 'react';
import {Link} from 'react-router-dom';
import RecentPost from '../RecentPost/RecentPost';
import classes from './SideBar.module.scss';

const SideBar = ({articleImages,articles}) => {

  const featurePostImage = articleImages[0][0];
  const featurePostTitle = articles[0].title;
  const featureArticleURL = `/news/${featurePostTitle}`;

  return (
    <div className={classes['sidebar']}>
      <h1 className={classes['sidebar__title']}>
        Featured Posts
      </h1>
      <div className={classes['feature-posts']}>
        <Link to={featureArticleURL}><img className={classes['feature-posts__img']} src={featurePostImage} alt=''/></Link>
        <Link to={featureArticleURL}>
          <h1 className={classes['feature-posts__title']}>
            {featurePostTitle}
          </h1>
        </Link>
      </div>
      <h1 className={classes['sidebar__title']}>
        Recent Posts
      </h1>
      <div className={classes['recent-posts']}>
        {
          articles.map((article, i) => {
            if (i > 1)
              return null;
            return <RecentPost key={i} image={articleImages[i][0]} title={article.title} date={article.date}/>
          })
        }

      </div>
    </div>
  );
}

export default SideBar;
