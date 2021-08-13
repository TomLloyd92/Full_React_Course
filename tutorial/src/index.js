import React from 'react';
import reactDom from 'react-dom';
import './index.css'

function BookList()
{
  return (
    <section className='booklist'>
      <Book src={firstBook.src} title={firstBook.title} author={firstBook.author}> 
        <p>
          Child Prop
        </p>
      </Book>
      <Book/>
      <Book/>
      <Book/>
    </section>
    );
}

var firstBook = {
  src: "https://images-eu.ssl-images-amazon.com/images/I/41OFL5NYnBS._SY291_BO1,204,203,200_QL40_ML2_.jpg",
  title:'Defi Book' ,
  author: 'Coin Gekko'
}



// const Book = (props) =>{
//   console.log(props);
const Book = ({src, title, author, children}) =>{

  return (
  <article className='book'>
    <img src={src}/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
  );
}

/*
const Image = () => {
  return(
  <img src = "https://images-eu.ssl-images-amazon.com/images/I/41OFL5NYnBS._SY291_BO1,204,203,200_QL40_ML2_.jpg"></img>
  );
}

const Title = () => {
  const title = 'Defi Book'
  return(
    <h1>{title}</h1>
  );
}

const Author = () => {
  const author = "Coin Gekko";
  return(
    <h4>{author}</h4>
  );
}
*/


reactDom.render(<BookList/>, document.getElementById('root'));