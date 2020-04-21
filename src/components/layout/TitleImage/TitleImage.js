import React from 'react';
import { connect } from 'react-redux';
import content from './content.json';
import classes from './TitleImage.module.scss';
import PropTypes from 'prop-types';


const TitleImage = ({
  language:{
  language
  },
  route
}) => {

  //titles
  const {
    title1,
    title3,
  } = content[language];

  const title2 = content[language][route];

  return (
    <div className={classes['landing']}>
        <p className={classes['small-title']}>
          {title1}
        </p>
          <h1 className={classes['large-title']}>
            {title2}
          </h1>
        <h2 className={classes['medium-title']}>
          {title3}
        </h2>
    </div>
  );
}



TitleImage.propTypes = {
  route:PropTypes.string.isRequired
};



const mapStateToProps = state => ({
  language:state.language
})


export default connect(mapStateToProps)(TitleImage);
