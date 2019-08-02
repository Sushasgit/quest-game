
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ScrollMagic from 'scrollmagic';
import {TimelineMax, TweenMax, Elastic, Circ, Sine, Bounce, Power2 } from 'gsap'
// import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import logo from '../../images/logo-real.png';
require("script!animation.gsap");

import './banner.scss';
import Menu from '../Menu';

const Layer = styled.div`
  transform: translate3d(0px,${props => (Math.round(props.position) ? Math.round(props.position) : '0')}px, 0px);
`;

const LayerPosition = styled.div` &&{
  transform: translate3d(${props => (Math.round(props.positionX) ? Math.round(props.positionX) : '0')}px, ${props => (Math.round(props.positionY) ? Math.round(props.positionY) : '0')}px, 0px)
 scale(${props => props.scaleX ? props.scaleX : '1'});
    
  background-position: 
    ${props => (props.bottom ? 'bottom' : 'top')} 
    ${props => (props.rightSide ? 'right' : 'left')} 
    ${props => (props.posY ? Math.round(props.posY) : '0')}px;}
`;

// var tl = new TimelineMax({
//   repeat: 0,
//   play: 0,
//   yoyo: true,
//   delay:1
// });
// let animation = new TimelineMax({
//       repeat:1,
//     })

class Banner extends Component {
  constructor(){
    super()

    this.state = {
      paused:true,
    }

    this.layer1 = React.createRef();
  }
  

  componentDidMount() {
    TweenMax.set("#arizona, h1", {xPercent:-50, yPercent:-50});

    let width = window.innerWidth,
        height = window.innerHeight; 
        
        console.log(width, height)

        var controller = new ScrollMagic.Controller();

        var action = new TimelineMax()
  .to('#arizona',5,{width:'110%', y:"+=130"})
  
  .to('.part06',5,{y:'+=10'},0)
  .to('.part05',5,{y:'+=25'},0)
  .to('.part04',4.75,{y:'+=30'},0)
  .to('.part03',4.5,{y:'+=35'},0)
  .to('.part02',4.25,{y:'+=40'},0)
  .to('.part01',4,{y:'+=50'},0)
  .to('#sun',5.5,{
    bezier:{values:[
      {x:0, y:0}, 
      {x:150, y:0}, 
      {x:350, y:180}
  ]}, ease: Power2.easeOut},0)
  .to('#night',1,{autoAlpha:1},2)
  .to('h1',2,{autoAlpha:1, y:'+=150'},0)
  .to('h1',4.5,{scale:2},1.5)

        new ScrollMagic.Scene({
          triggerElement: "body",
          triggerHook: "onLeave",
          duration: 2000,   
          offset:0
        })
          .setTween(action)
          .setPin("#wrapper")
          //.addIndicators()
          .addTo(controller);
  }


  // animate(event) {
  //   if (this.state.paused) {
  //     tl.resume() 
  //     this.setState({
  //       paused:false,
  //     })
  //   } else {
  //     tl.pause()
  //     this.setState({
  //       paused:true,
  //     })
  //   }
  // }
  render() {
    const { posY } = this.context;
    return (
      <div className="banner">
        <div ref={this.layer1} className='l test l1' />
        <div className='test l l4'>A</div>
        <div className='test l l5'>B</div>
        <div className='test l l7'>C</div>
        <div className='test l l8'>D</div>
        <div className='test l l9'>D</div>
        <div className='test l l10'>D</div>
        <div className='test l l11'>D</div>
        <div className='div'>E</div>
        <div className='div'>F</div>
      </div>
    );
  }
}

Banner.contextTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};


export default Banner;
