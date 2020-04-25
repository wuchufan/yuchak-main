import React,{Fragment} from 'react';
import classes from './Carousel.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
  const settings = {
    dots: true,
    // autoplay:true,
    arrows:false
  }
  const hrStyle={
    color:'rgba(0, 0, 0, 0.8)',
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    height:'2px',
    border:'none',
    width:'10%',
    display:'block',

  };

  return (
    <Fragment>
     {/* carousel 1 */}
    <div className={classes['container']}>
    <h3 className={classes['carousel-small-title']}>Special Topics</h3>
    <h1 className={classes['carousel-title']}>ORLANDO 奥兰多专题</h1>
    <Slider {...settings}>
      <div>
        <div className={classes['slider']+' '+ classes['slider--orlando-1']}>
          <div className={classes['slider__content']}>
            <h1 className={classes['slider__title']}>
              度假村中的度假村
            </h1>
            <hr style={hrStyle}/>
            <p className={classes['slider__paragraph']}>
              Encore Resort Homes at Reunion is the perfect place to vacation, and to keep coming back! Minutes from Orlando’s world-famous excitement, our private resort community offers luxury homes with 5 to 13 bedroom floorplans and exclusive Encore Club with restaurants, bar, pool, fitness center and fabulous AquaPark.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={classes['slider']+' '+ classes['slider--orlando-2']}>
          <div className={classes['slider__content']}>
            <h1 className={classes['slider__title']}>
              四星級裝修標準
            </h1>
            <hr style={hrStyle}/>
            <p className={classes['slider__paragraph']}>
              Five to 13 bedroom floorplans, multiple master suites and lots of bathrooms mean everyone gets their private retreat. Generous dining room, living areas and game rooms let everyone spend time together comfortably.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={classes['slider']+' '+ classes['slider--orlando-3']}>
          <div className={classes['slider__content']}>
            <h1 className={classes['slider__title']}>
              社區配套設施齊全
            </h1>
            <hr style={hrStyle}/>
            <p className={classes['slider__paragraph']}>
              The spectacular clubhouse and fitness center overlooks Encore’s private AquaPark, which includes a huge drop slide, water slides, a beautiful pool, Surfin’ Safari children’s splash area, cabanas and lush tropical landscaping. We also feature fabulous outdoor facilities including soccer fields, tennis, basketball and sand volleyball courts.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  </div>

  {/* carousel 2 */}
  <div className={classes['container']}>
  <h1 className={classes['carousel-title']}>MIAMI 迈阿密专题</h1>
  <Slider {...settings}>
    <div>
      <div className={classes['slider']+' '+ classes['slider--miami-1']}>
        <div className={classes['slider__content']}>
          <h1 className={classes['slider__title']}>
            The Ritz-Carlton Residences
          </h1>
          <hr style={hrStyle}/>
          <p className={classes['slider__paragraph']}>
            Located in the heart of magnificent Sunny Isles Beach, with spectacular views of the Atlantic Ocean and Intracoastal Waterway, The Ritz-Carlton Residences, Sunny Isles Beach stands between the prestigious Bal Harbour Shops and Aventura Mall
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className={classes['slider']+' '+ classes['slider--miami-2']}>
        <div className={classes['slider__content']}>
          <h1 className={classes['slider__title']}>
            The Ritz-Carlton Residences
          </h1>
          <hr style={hrStyle}/>
          <p className={classes['slider__paragraph']}>
            The unprecedented luxury and superb design and architecture are complimented by a location in close proximity to all of the excitement, culture and beauty of South Florida.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className={classes['slider']+' '+ classes['slider--miami-3']}>
        <div className={classes['slider__content']}>
          <h1 className={classes['slider__title']}>
            3900 Alton Miami
          </h1>
          <hr style={hrStyle}/>
          <p className={classes['slider__paragraph']}>
            Rising gracefully amid the turquoise waters of Biscayne Bay, 3900 Alton brings the modern design of internationally acclaimed master architect Ricardo Bofill to the historic heart of Miami Beach, offering a residential enclave of luxury, convenience, and breathtaking views.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className={classes['slider']+' '+ classes['slider--miami-4']}>
        <div className={classes['slider__content']}>
          <h1 className={classes['slider__title']}>
            3900 Alton Miami
          </h1>
          <hr style={hrStyle}/>
          <p className={classes['slider__paragraph']}>
            Developer Mast Capital has assembled a visionary team of designers, artists, and craftsmen to create a lifestyle of quiet elegance and stunning beauty in an unrivaled location.
          </p>
        </div>
      </div>
    </div>
  </Slider>
</div>
</Fragment>);
}

export default Carousel;
