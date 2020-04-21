import React from 'react';
import classes from './NewsLetter.module.scss';
import { connect } from 'react-redux';
import content from './content.json';

const NewsLetter = ({language:{language}}) => {

  const {
    title,
    button,
    placeholder
  } = content[language]

  return (
    <section className={classes['container']}>
      <h1 className={classes['title']}>
        {title}
      </h1>
      <form className={classes['form']}>
      <input placeholder={placeholder} className={classes['input']}/>
      <button type='submit' className={classes['button']}>
        {button}
      </button>
      </form>
    </section>
  );
}

const mapStateToProps = state =>({
  language:state.language
})


export default connect(mapStateToProps)(NewsLetter);
