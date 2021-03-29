import React from 'react'
import moment from 'moment'
const Article = ({ title, snippet, date, length }) => {
  // console.log(date)
  //comes from the labrary//moment().format('MMMM Do YYYY, h:mm:ss a'); // March 29th 2021, 4:25:01 pm

  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('MMMM Do YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
