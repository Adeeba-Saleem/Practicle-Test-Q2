import React, { useEffect, useState } from 'react';


function Book() {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=7zNmG09lSAhkcNJnefMzmXRYvAyR24Pn`,{
      method: "GET"
    })
    .then(res=>res.json())
    .then(res=>setBooks(res.results.lists))
    .catch(err=>console.log(err));
  },[]);

  return (
   <div className="container">
     <div class="row">
     <div className="col-8 col-md-5 ">
      {books.map((item, index) => <div
       key={index}
       className="card">
        <img src="https://s1.nyt.com/du/books/images/9780385545969.jpg" className="card-img-top" alt="Game of thrones" />
        <div className="card-body">
           <h5 className="card-title">{item.list_name}</h5>
           <a href="#" className="btn btn-primary">Buy</a>
         </div>
        </div>
      )}
      </div>
      </div>
   </div>
   
  );
}

export default Book;
