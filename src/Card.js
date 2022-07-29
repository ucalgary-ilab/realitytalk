import React, {Component} from 'react'
import _ from 'lodash'

class Card extends Component {
    constructor(props) {
        super(props)
        if (!this.props.item) return
    }

    // componentDidMount() {
    // }



    onClick(item) {
        console.log(item)
        window.App.setState({current: item})
    }

    getVideoEmbed(item) {
        if (item.link) {
            if (item.link.includes('youtube')) {
                item.embedId = item.link.split('?v=')[1]
                item.embed = `https://www.youtube.com/embed/${item.embedId}`
                // item.embedThumbnail = `https://img.youtube.com/vi/${item.embedId}/maxresdefault.jpg`
                item.embedThumbnail = `https://vumbnail.com/${item.embedId}_large.jpg`
            } else if (item.link.includes('vimeo')) {
                item.embedId = item.link.split('/')[3]
                item.embed = `https://player.vimeo.com/video/${item.embedId}`
                item.embedThumbnail = `https://vumbnail.com/${item.embedId}_large.jpg`
            } else {
                item.embed = 'null'
            }
        }
    }

    render() {
        if (!this.props.item) {
            return <div></div>
        }

        let item = this.props.item
        this.getVideoEmbed(item)


        return (
            <div className="column" key={this.props.key} onClick={this.onClick.bind(this, item)}>
                <div className="paper-card ui raised link card">
                    {/*<div className="content">*/}
                    {/*    <div className="meta">*/}
                    {/*        /!*<div className="left floated">*!/*/}
                    {/*        /!*  <span className="date">{ item.year }</span>*!/*/}
                    {/*        /!*</div>*!/*/}
                    {/*        /!*<div className="right floated">*!/*/}
                    {/*        /!*  <span className="date">{ `${author} et al.` }</span>*!/*/}
                    {/*        /!*</div>*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {item.embed !== 'null' ?
                        <div className="block">
                            <div className="video-container">
                                <iframe
                                    className="embed"
                                    width="100%"
                                    height="145"
                                    src={`${item.embed}`}
                                    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${item.embed}?autoplay=1><img src=${item.embedThumbnail}><span>▶</span></a>`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen={true}
                                    mozallowfullscreen="true"
                                    msallowfullscreen="true"
                                    oallowfullscreen="true"
                                    webkitallowfullscreen="true"
                                ></iframe>
                            </div>
                        </div> :
                        <div className="image">
                            <img className="ui small image"
                                 src={`/realitytalk/cover/no-preview.png`}/>
                        </div>
                    }


                    <div className="content">
                        <div className="description max-two-lines">
                            <b>{item.video}</b>
                        </div>
                        {/*<div className="meta max-two-lines">*/}
                        {/*  { venue }*/}
                        {/*</div>*/}
                    </div>
                    <div className="extra content">
                        <div className="right floated">
                            <a className="ui mini button" href={item.screenshots} target="_blank">Screenshots</a>
                            <a className="ui mini button" href={item.link} target="_blank"><i
                                class="fa-solid fa-paperclip"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Card