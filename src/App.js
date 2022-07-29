import React, { Component } from 'react'
import './App.css'
import _ from 'lodash'
import Glider from 'react-glider'
import 'glider-js/glider.min.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import items from './items.json'

import Card from './Card.js'
import Modal from './Modal.js'

class App extends Component {
  constructor(props) {
    super(props)
    window.App = this

    this.settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    this.state = {
      items: items,
      current: {}
    }
  }

  componentDidMount() {
    this.setState({ test: '123' })
  }

  render() {
    return (
      <>
        <div>
          <div className='ui vertical masthead center aligned segment'>
            <div className='ui text container'>
              <h1 className='ui center aligned icon header' style={{ fontSize: '2.4em' }}>
                {/*<i className='settings icon'></i>*/}
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <i className='fa-brands fa-bilibili fa-2x'></i>
                </div>
                {/*
                <i class='fa-solid fa-robot'></i>
                <i class='fa-brands fa-codepen'></i>
                <i class='fa-solid fa-dice-d6'></i>
                <i class='fa-solid fa-graduation-cap'></i>
                */ }
                RealityTalk
              </h1>
              <p><h2>Real-time Speech-driven Augmented Presentation for AR Live Storytelling</h2></p>
              <p>by Jian Liao, Adnan Karim, Shivesh Jadon, Rubaiat Kazi Habib, Ryo Suzuki</p>
              <p><i>Keywords: Augmented and Mixed Reality, Augmented Presentation, Storytelling, Natural Language Processing, Speech Recognition</i></p>
              <p>
                <a href='/realitytalk/uist-2022.pdf' target='_blank' className='ui button'>
                  PDF
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href='https://doi.org/10.1145/3526113.3545702' target='_blank' className='ui  button'>
                  DOI
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href='https://ryosuzuki.org/' target='_blank' className='ui  button'>
                  Contact
                </a>
              </p>

              <a href='/realitytalk/uist-2022.pdf' target='_blank'>
                <img id='teaser' src='/realitytalk/uist-2022/figures/teaser.png' />
              </a>
            </div>
            <div>
              {/*
              <a className='ui tiny images' href='/ar-and-robotics/chi-2022.pdf' target='_blank'>
                { [...Array(10).keys()].map(i => {
                  let s = String(i + 1)
                  while (s.length < 2) {s = '0' + s;}
                  return (
                    <img key={i} src={ `/ar-and-robotics/chi-2022/thumbnail/paper-${s}.jpg`} />
                  )
                })}
              </a>
              */}
            </div>
            <div>
            </div>

{/*            <div id='bibtex-container'>*/}
{/*              <pre id='bibtex' className='ui message'>*/}
{/*/!*{`@inproceedings{liao2022realitytalk,*!/*/}
{/*/!*  title={RealityTalk: Real-Time Speech-Driven Augmented Presentation for AR Live Storytelling},*!/*/}
{/*/!*  author={Jian Liao, Adnan Karim, Shivesh Jadon, Rubaiat Kazi Habib, Ryo Suzuki},*!/*/}
{/*/!*  booktitle={Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems},*!/*/}
{/*/!*  pages={1--32},*!/*/}
{/*/!*  year={2022},*!/*/}
{/*/!*  url = {https://doi.org/10.1145/3526113.3545702}*!/*/}
{/*/!*}`}*!/*/}
{/*              </pre>*/}
{/*            </div>*/}

          </div>
          <div className='ui vertical segment'>
            <div id='cards' className='ui five column centered stackable grid'>
              { this.state.items.map((item, i) => {
                return (
                  <Card
                    item={ item }
                    key={ i }
                  />
                )
              })}
            </div>
          </div>
        </div>

        <Modal
          item={ this.state.current }
        />
      </>
    )
  }
}

export default App