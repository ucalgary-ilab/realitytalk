import React, { Component } from 'react'
import _ from 'lodash'

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {


  }

  render() {
    let item = this.props.item
    let venue
    if (!venue) venue = item.journal
    if (!venue) venue = item.booktitle
    if (!venue) venue = item.venue
    let author
    if (item.authors) {
      author = item.authors[0]
    }
    if (author) {
      author = _.last(author.split(' '))
    }
    return (
      <div id="modal">
        <div className="ui large modal">
          <div className="header">
            { `${author} et al. ${item.year}` }
            <div className="actions" style={{ float: 'right', cursor: 'pointer', color: 'grey' }}>
              <i className="ui right cancel close icon">
              </i>
            </div>
          </div>
          <div className="card image content">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lYPe4MsALk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div className="ui medium image">
              <img src={ `/ar-and-robotics/cover/${item.key}.jpg` } />
            </div>
            <div className="description">
            <div className="ui header">
              <h3>{ item.title }</h3>
            </div>
            <p>{ item.authors && item.authors.join(', ') }</p>
            <div className="meta">
              <p><i>{ venue }</i></p>
            </div>
            <br />
            <div className="meta">
              <p>
                <a className="ui mini button" href={ `http://doi.org/${item.doi}` } target="_blank">DOI</a>
                <a className="ui mini button" href={ item.paperUrl } target="_blank">Semantic Scholar</a>
                { item.pdf &&
                  <a className="ui mini button" href={ item.pdf } target="_blank">PDF</a>
                }
              </p>
            </div>
            </div>
          </div>
          <div className="content">
            { item.abstract &&
              <h3>Abstract</h3>
            }
            <p>{ item.abstract }</p>
          </div>
          <div className="scrolling content" style={{ maxHeight: '300px' }}>
            <div className="ui images">
              { item.images && item.images.map((image, i) => {
                return (
                  <div className="image">
                    <img src={ image } />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="actions">
            <div className="ui right cancel button">
              Close
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Modal