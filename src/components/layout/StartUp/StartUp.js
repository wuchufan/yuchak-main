import React, {Fragment} from 'react';
import classes from './StartUp.module.scss';
import landing from '../../../assets/imgs/startup/startup-landing.jpg';
import icon1 from '../../../assets/imgs/startup/startup-icons-1.jpg';
import icon2 from '../../../assets/imgs/startup/startup-icons-2.jpg';
import icon3 from '../../../assets/imgs/startup/startup-icons-3.jpg';
import icon4 from '../../../assets/imgs/startup/startup-icons-4.jpg';
import icon5 from '../../../assets/imgs/startup/startup-icons-5.jpg';
import icon6 from '../../../assets/imgs/startup/startup-icons-6.jpg';

const StartUp = () => {
  return (<Fragment>
    <section className={classes['landing']}>
      <div className={classes['landing__title']}>
        <h1>
          Start-Up
        </h1>
        <h1>
          创业
        </h1>
        <h3>
          量身订造创业计划
        </h3>
      </div>
      <div className={classes['landing__img']}>
        <img style={{objectFit:'cover'}} loading='lazy' height='100%' width='100%' src={landing}/>
      </div>

    </section>
    <section className={classes['six-steps']}>
      <div className={classes['six-steps__title']}>

        <h1>
          创业六步走
        </h1>
        <h1 style={{letterSpacing:'1.5rem'}}>
          ​SIX STEPS
        </h1>
      </div>
      <div className={classes['six-steps__icons']}>
        <div className={classes['icon'] + ' ' + classes['icon--1']}>
          <h3 className={classes['icon__title']} >1.寻求机会</h3>
          <img src={icon1} loading='lazy' alt=''/>
        </div>
        <div className={classes['icon'] + ' ' + classes['icon--2']}>
          <img src={icon2} loading='lazy' alt=''/>
          <h3 className={classes['icon__title']} >2.市场调查</h3>
        </div>
        <div className={classes['icon'] + ' ' + classes['icon--3']}>
          <h3 className={classes['icon__title']} >3.物业买卖</h3>
          <img src={icon3} loading='lazy' alt=''/>
        </div>
        <div className={classes['icon'] + ' ' + classes['icon--4']}>

          <h3 className={classes['icon__title']} >4.商业贷款</h3>
            <img src={icon4} loading='lazy' alt=''/>
        </div>
        <div className={classes['icon'] + ' ' + classes['icon--5']}>
                    <img src={icon5} loading='lazy' alt=''/>
          <h3 className={classes['icon__title']} >5.市场推广</h3>

        </div>
        <div className={classes['icon'] + ' ' + classes['icon--6']}>

          <h3 className={classes['icon__title']} >6.物业管理</h3>
              <img src={icon6} loading='lazy' alt=''/>
        </div>
      </div>
    </section>
    <section className={classes['article']}>
      <p>
        最近一段时期，由于加拿大零售商业一直呈上升趋势，加上经济好转，商业、零售物业以及办公室空间的需求量增加，带动商业地产市场持续活跃。

 </p>


<p>
据多伦多地产局发布的最新统计数字显示，去年第四季度对于按净平方尺计算且透露了价格的物业，在工业、商业、零售业和办公物业市场，平均租金都有所增加。同时，对于透露了价格的交易，每平方尺的平均销售价格在以上三个市场都有所上升。

</p>

<p>

最近数年民间投资者逐渐进入商业地产领域。市场上有志于投资人士把目光投向商业物业类项目，诸如购入小型出租公寓楼、市区及郊区的店面、小型办公楼等，或者置业投资、土地开发、物业销售、购买PLAZA、加油站、小型地产开发项目等。
</p>
 <p>
很多华人投资者看着这里的犹太裔，意大利后裔，甚至是伊朗朋友都赚得本满钵满，似乎还在游走于迷茫之中：在加拿大进行大中型的商业地产投资，适合我们吗？答案当然是肯定的。

</p>

<p>

首先，多伦多的物业比起中国的房产来讲，还是算比较便宜的，可是如果你做横向比较，多伦多的地产，已经非常强劲地升值了相当长的一段时间。对于手头资金不够，或者初次进入地产投资市场的朋友来讲，去占领多伦多以外的值得投资的地区。而这样的城市不在少数，从投资回报率来讲，远胜多伦多。随着一些热点地区的兴起，商业地产的扩张空间被极大地优化了。价格的优势，让不少投资人在震惊之余，感到非常兴奋。
</p>

<p>
其次，要购买有潜力的商业物业。所谓水满则溢，当一个被100%完全利用的商业物业呈现在你面前的时候，良好的租客记录，超高的资金回报率，完善的物业管理，靓丽的室内装潢，它的确让你心动。但一个并不怎么吸引人的商业物业，却未必没有投资价值，也许用智慧和前瞻性的眼光，把物业变得焕然一新的时候，租客就会大批涌入。等有一天，再挂牌出售它，由于在原始购买的时候，拿到的是一个超低价，现在一个生龙活虎的商业地产被一个合理的优良价格购进的时候，这一切就显得顺理成章了。“创造性地改造商业地产，利用商业地产上千变万化的投资思路，让自己的投资利益最大化”是Donald Trump在商业地产成功的法宝。
      </p>
    </section>
  </Fragment>);
}

export default StartUp;
