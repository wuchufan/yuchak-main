import React from 'react';
import classes from './Buildings.module.scss';
import b1 from '../../../../assets/imgs/estate/building-1.jpg';
import b2 from '../../../../assets/imgs/estate/building-2.jpg';
import b3 from '../../../../assets/imgs/estate/building-3.jpg';
import b4 from '../../../../assets/imgs/estate/building-4.jpg';
import b5 from '../../../../assets/imgs/estate/building-5.jpg';
import b6 from '../../../../assets/imgs/estate/building-6.jpg';
import b7 from '../../../../assets/imgs/estate/building-7.jpg';
import b8 from '../../../../assets/imgs/estate/building-8.jpg';


const Buildings = () => {
  return (
    <section className={classes['building-container']}>
    <div className={classes['building']}>


      <div className={classes['building__image']}>
        <img loading='lazy' src={b1} width='170px' height='170px' alt='building'/>
      </div>
      <div className={classes['building__title']}>
        <h1>
          55C Condos - Charles St 上最后一块宝地
        </h1>
      </div>
      <div className={classes['building__content']}>
        <p>
          55C Condos的艺术概念展示了一个超现代的摩天大楼，与现有的街景完美融合，同时还融入了惊人的独特设计特色。建筑的塔楼部分由六层高的裙楼基座组成，围绕高耸的垂直线条建造，并辅以突出的窗户特征，以交替的方式排列，以创造棋盘效果。它的最高处达到55层，进入多伦多天际线，最大高度为585英尺（178.25米）。
        </p>
      </div>
      <div className={classes['building__button']}>
        <a href="/"> Read more</a>
      </div>
    </div>


    <div className={classes['building']}>
      <div className={classes['building__image']}>
        <img loading='lazy' src={b2} width='170px' height='170px' alt='building'/>
      </div>
      <div className={classes['building__title']}>
        <h1>
          11 Yorkville - 钻石区仅此唯一的奢华盘
        </h1>
      </div>
      <div className={classes['building__content']}>
        <p>
          11 Yorkville，仿佛曼哈顿第五大道上的摩天大楼，现代简约的外立面设计，不受各时代审美的束缚。由获奖无数的建筑设计公司Sweeny & Co操刀设计，打造优雅别致，奢华感十足的大楼。11 Yorkville，致力奢华，专为高端生活而设计。拥有高端的现代化设施，如游泳池，冷热水池，巨大的停车位，屋顶露台，宽敞的大堂和休息室，设备齐全的健身中心等。室内设计来看，近10ft超高层高，厨房大理石中心岛，超大露台专业衣橱收纳设计，臻选单位限量获得。
        </p>
      </div>
      <div className={classes['building__button']}>
        <a href="/"> Read more</a>
      </div>
    </div>


    <div className={classes['building']}>
      <div className={classes['building__image']}>
        <img loading='lazy' src={b3} width='170px' height='170px' alt='building'/>
      </div>
      <div className={classes['building__title']}>
        <h1>
          Lake & Town - 都市一隅，临湖而居
        </h1>
      </div>
      <div className={classes['building__content']}>
        <p>
          Lake & Town坐落于Etobicoke南安大略湖湖畔。众所周知，南端近湖一带是Etobicoke的黄金地段，交通便利，风景优美。项目将包含12栋联排别墅，总建筑面积为25,890平方英尺。全部3层高。总共210个单位。秉承一贯的匠心，开发商诚意十足，配置“重磅”：当代建筑风格 / 地下停车场，并设有访客停车场 / 考虑居家需求，设计了更大的厨房柜台、洗衣间，栎木楼梯，石英台面，早餐柜台 / 主要楼层的天花板高度为9英尺，屋顶露台
        </p>
      </div>
      <div className={classes['building__button']}>
        <a href="/"> Read more</a>
      </div>
    </div>


    <div className={classes['building']}>
      <div className={classes['building__image']}>
        <img loading='lazy' src={b4} width='170px' height='170px' alt='building'/>
      </div>
      <div className={classes['building__title']}>
        <h1>
          Liberty Market Tower - 风尚生活，垂手可得
        </h1>
      </div>
      <div className={classes['building__content']}>
        <p>
          Liberty MarketTower是加拿大知名开发商Lifetime在多伦多Liberty Village “Liberty Market Complex” 项目的最后一期的豪华公寓楼花，（前两期分别为 Liberty Market Building 和Liberty Market Lofts）位于 E liberty St/Hanna Ave的交界处！Liberty Market Tower公寓一共有28层高，7层以下将用于办公以及零售，而公寓的公共设施会位于第8层，公共设施包括带游泳池的Gym，会议室和酒吧等，为住户带来有品位和年轻的生活环境。
        </p>
      </div>
      <div className={classes['building__button']}>
        <a href="/"> Read more</a>
      </div>
    </div>


    <div className={classes['building']}>
      <div className={classes['building__image']}>
        <img loading='lazy' src={b5} width='170px' height='170px' alt='building'/>
      </div>
      <div className={classes['building__title']}>
        <h1>
          88 Queen - 多伦多中心AAA神级楼盘
        </h1>
      </div>
      <div className={classes['building__content']}>
        <p>
          88 Queen的地理位置十分优越，多伦多龙脉Yonge街及多伦多金融中心就在其西边，楼盘还紧邻Ryerson大学和乔治布朗学院。值得一提的是，88 Queen坐落于一个GTA最大就业区域——Downtown Core这个安大略省工作职位的核心，全省约三分之一的工作职位集中于市中心。除了良好的就业环境外，88 Queen还毗邻多伦多的大学区——Ryerson University以及多大。寸土寸金的市中心地区一直是多伦多涨幅最高的地区之一，今时今日，已跃成加拿大房价最高的城市。88 Queen所处位置的生活设施也都十分便利，每天有超过20万的人流，使得皇后 88号拥有优质的租客市场。
        </p>
      </div>
      <div className={classes['building__button']}>
        <a href="/"> Read more</a>
      </div>
    </div>


    <div className={classes['building']}>
      <div className={classes['building__image']}>
        <img loading='lazy' src={b6} width='170px' height='170px' alt='building'/>
      </div>
      <div className={classes['building__title']}>
        <h1>
          Sugar Wharf Penthouse - 至尊奢华湖滨全景公寓
        </h1>
      </div>
      <div className={classes['building__content']}>
        <p>
          Sugar Wharf 会推出两栋高档住宅楼，步行指数为95/100，结合了最好的开发商和最有潜力的位置，是最有升值潜力的地标建筑群。两个楼盘均将与全球最大的地下商业综合体——多伦多地下步行系统PATH相连，冬天不用踩雪就能出街。
        </p>
      </div>
      <div className={classes['building__button']}>
        <a href="/"> Read more</a>
      </div>
    </div>


    <div className={classes['building']}>
      <div className={classes['building__image']}>
        <img loading='lazy' src={b7} width='170px' height='170px' alt='building'/>
      </div>
      <div className={classes['building__title']}>
        <h1>
          One Yonge - 央街1号，立于城市起点
        </h1>
      </div>
      <div className={classes['building__content']}>
        <p>
          One Yonge Condo（央街一号公寓）位于北美最长的街道Yonge St（央街）和安大略湖的交汇处。入驻One Yonge，就是入驻加拿大的巅峰，就是抢到了多伦多的龙头，这里天生就拥有多伦多最尊荣的地位，居于期间如同俾睨天下，自生豪迈。五期之中又以One Yonge二期为至尊，高度最高，视野最好，户型最好，绝对不容错过。
        </p>
      </div>
      <div className={classes['building__button']}>
        <a href="/"> Read more</a>
      </div>
    </div>


    <div className={classes['building']}>
      <div className={classes['building__image']}>
        <img loading='lazy' src={b8} width='170px' height='170px' alt='building'/>
      </div>
      <div className={classes['building__title']}>
        <h1>
          Union Village - 万锦名校区豪华联排镇屋
        </h1>
      </div>
      <div className={classes['building__content']}>
        <p>
          Union Village联排别墅和独立屋将由Minto集团全力打造，地处16th Avenue/Kennedy Road，拥有优越的地理位置。Union Village 位于Unionville，是位于GTA北部的万景市中备受追捧的社区，更是华人最爱的黄金地段，距离历史悠久的Main Street Unionville仅几步之遥。以其一流的学校，广阔的自然环境，高尔夫球场而闻名。针对不同大小的家庭，这里都将有适合的房型。区别于一般联排别墅统一乏味的外表设计，Unionvillage的联排别墅将各种风格汇合在一起，使每一家看起来一样又都不一样，增加了小区内的多样和生动性
        </p>
      </div>
      <div className={classes['building__button']}>
        <a href="/"> Read more</a>
      </div>
    </div>
  </section>
  );
}



export default Buildings;
