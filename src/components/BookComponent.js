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
     <div className="col-8 col-md-4 ">
      {books.map((item, index) => <div
       key={index}
       className="card">
        <img src='item.list_image'/>
        <div className="card-body">
           <h5 className="card-title">{item.list_name}</h5>
           <h5 className="card-title">{item.updated}</h5>
           <a href="{item.books.amazon_product_url}" className="btn btn-primary">Buy</a>
         </div>
        </div>
      )}
      </div>
      </div>
   </div>
   
  );
}

export default Book;
