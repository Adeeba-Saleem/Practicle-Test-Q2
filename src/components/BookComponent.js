import React, {Component}  from 'react';
import { Card, CardImg, CardBody,
  CardTitle,CardSubtitle} from 'reactstrap';

class Book extends Component{

  state ={
    loading: true,
    book: null
  };

async componentDidMount(){
      const url = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=7zNmG09lSAhkcNJnefMzmXRYvAyR24Pn";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({book: data.results.lists[3], loading: false});


}

render(){
  return (
  <div>
     {this.state.loading || !this.state.book? (
     <div>Loading</div> 
     ) : (
        <div>
            <Card>
                  <CardImg width="100%" src={this.state.book.list_image} />
                  <CardBody >
                  <CardTitle   style={{textAlign: "left"}}  >{this.state.book.list_name}</CardTitle>
                  <CardSubtitle style={{textAlign: "left"}}>{this.state.book.display_name}</CardSubtitle>
                  <CardSubtitle style={{textAlign: "left"}}>{this.state.book.updated}</CardSubtitle>
                  </CardBody>
            </Card>

        </div>
     )}
      </div>
  );
}
}

export default Book;