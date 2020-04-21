import React from 'react';
import classes from './Service.module.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import content from './content.json';


const Service = ({ language:{language} }) => {

  const {
    c1Title,
    c2Title,
    c1Content,
    c2Content,
    sHeader,
    sTitle,
    sContent

  } = content[language];
  return (
    <section className={classes['container']}>
      <div className={classes['card']}>
        <div className={classes['card__icon']}>
          <FontAwesomeIcon size='2x' icon={faMap}/>
        </div>
        <div className={classes['card__content']}>
          <h1 className={classes['card__title']}>
            {c1Title}
          </h1>
          <p className={classes['card__paragraph']}>
            {c1Content}
          </p>
        </div>
        <div className={classes['card__bottom']}>
          <a href='https://www.ycimm.com/' className={classes['card__bottom-icon']}>
            <FontAwesomeIcon icon={faArrowRight}/>
          </a>
        </div>
      </div>
      <div className={classes['card']}>
        <div className={classes['card__icon']}>
          <FontAwesomeIcon size='2x' icon={faUserGraduate}/>
        </div>
        <div className={classes['card__content']}>
          <h1 className={classes['card__title']}>
            {c2Title}
          </h1>
          <p className={classes['card__paragraph']}>
            {c2Content}
          </p>
        </div>
        <div className={classes['card__bottom']}>
          <a href='http://www.petitceo.com/' className={classes['card__bottom-icon']}>
            <FontAwesomeIcon icon={faArrowRight}/>
          </a>
        </div>
      </div>
      <div className={classes['service']}>
        <h3 className={classes['service__heading']}>
          {sHeader}
        </h3>
        <h1 className={classes['service__title']}>
          {sTitle}
        </h1>
        <p className={classes['service__content']}>
          {sContent}
        </p>
      </div>
    </section>
  );
}

const mapStateToProps = state =>({
  language:state.language
})

export default connect(mapStateToProps)(Service);
