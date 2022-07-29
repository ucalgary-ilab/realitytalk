import React, {Component} from 'react'
import _ from 'lodash'

class Modal extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {


    }

    render() {
        let item = this.props.item

        return (
            <div id="modal">
                <div className="ui large modal">
                    <div className="header">
                        {item.video}
                        <div className="actions" style={{float: 'right', cursor: 'pointer', color: 'grey'}}>
                            <i className="ui right cancel close icon">
                            </i>
                        </div>
                    </div>
                    <div className="card image content">
                        <iframe width="550" height="315" src={`${item.embed}`} frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                        {/*<div className="ui medium image">*/}
                        {/*  <img src={ `/ar-and-robotics/cover/${item.key}.jpg` } />*/}
                        {/*</div>*/}


                        <div className="description" style={{padding: '30px'}}>

                            <div className="ui header">
                                <h3>{"Categories"}</h3>

                                {item.category && item.category.split(', ').map((cat) => {
                                    if (cat !== ' ') {
                                        return <span className="ui large brown basic label"
                                                     key={cat}>{_.startCase(cat)}</span>
                                    }
                                })
                                }

                            </div>

                            <div className="meta">
                                {
                                    item.gesture &&
                                    <p><i>Gesture: {item.gesture}</i></p>
                                }

                                {
                                    item.location &&
                                    <p><i>Location: {item.location}</i></p>
                                }

                                {
                                    item.textual &&
                                    <p><i>Textual: {item.textual}</i></p>
                                }

                                {
                                    item.visual &&
                                    <p><i>Visual: {item.visual}</i></p>
                                }

                            </div>

                            <br/>

                            <div className="meta">
                                <div className="right floated">
                                    <a className="ui mini button" href={item.screenshots}
                                       target="_blank">Screenshots</a>
                                    <a className="ui mini button" href={item.link} target="_blank"><i
                                        className="fa-solid fa-paperclip"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="content">*/}
                    {/*    /!*{item.abstract &&*!/*/}
                    {/*    /!*    <h3>Abstract</h3>*!/*/}
                    {/*    /!*}*!/*/}
                    {/*    /!*<p>{item.abstract}</p>*!/*/}
                    {/*</div>*/}
                    {/*<div className="scrolling content" style={{maxHeight: '300px'}}>*/}
                    {/*    <div className="ui images">*/}
                    {/*        {item.images && item.images.map((image, i) => {*/}
                    {/*            return (*/}
                    {/*                <div className="image">*/}
                    {/*                    <img src={image}/>*/}
                    {/*                </div>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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