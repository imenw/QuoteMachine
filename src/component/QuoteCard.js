import React, { Component } from 'react';
import axios from 'axios';


const URI = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&_=';
class QuoteCard extends Component {

  constructor() {
    super();
    this.state = {
      quote: {
        content: '',
        link: '',
        title: ''
      },
      hasQuote: false
    }
  }

  getRandomQuote = () => {
    axios.get(URI + Math.random())
      .then(res => {
        this.setState({
          quote: {
            content: res.data[0].content,
            link: res.data[0].link,
            title: res.data[0].title
          },
          hasQuote: true
        })
      })
  }

  render() {

    const { hasQuote } = this.state;
    const { title, link, content } = this.state.quote;

    return (
        <div className="quote-card">
          <button onClick={this.getRandomQuote} className="quote-button">Get a Random Quote </button>
          <br />
        { hasQuote === true ?
          <div className="quote-content">
            <a href={link} className="quote-link">Click here to find quote source</a>
            <h2 className="quote-title">{title}</h2>
            <div dangerouslySetInnerHTML={{__html: content}} className="quote-text"/>
          </div>
          : 'no quote yet!'}
        </div>
    )
  }
}

export default QuoteCard;
