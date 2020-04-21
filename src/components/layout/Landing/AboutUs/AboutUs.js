import React from 'react';
import classes from './AboutUs.module.scss';
import content from './content.json';
import { connect } from 'react-redux';

const AboutUs = ({language:{language}}) => {
  const{ header,
  title,
  paragraph} = content[language];
  return (
    <section className={classes['container']}>
      <h3 className={classes['header']}>
        {header}
      </h3>
      <h1 className={classes['title']}>
        {title}
      </h1>
      <p className={classes['content']}>
        {paragraph}
      </p>
    </section>
  );
}

const mapStateToProps = state =>({
  language:state.language
})


export default connect(mapStateToProps)(AboutUs);
