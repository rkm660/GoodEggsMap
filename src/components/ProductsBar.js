import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    products: state.data.products,
    farmers: state.data.farmers,

});

class ProductsBar extends Component {

  constructor(props){
    super(props)
  }

  componentDidLoad(){
    this.props.exposeProducts()
  }

  render() {

    if (this.props.products){
 	    const products = this.props.products.filter(product => {return this.props.categories[product['product_category']];}).map(product => {
      return (<li key={product['_id'] + '_li'} className="list-group-item product-item"><a title={product['product_name']} target='_blank' href={'http://www.goodeggs.com' + product['product_link']}><img key={product['_id'] + '_img'} alt={product['product_name']} src={'http://' + product["product_pic"]} width='100%' height='100%'/></a></li>);
    });

    let displayMessage; 

    if (products.length > 0) {
        displayMessage = (<h5><strong>{products.length}/{this.props.products.length}</strong> Products Displayed</h5>); 
    }
    else {
        displayMessage = (<h5><strong>No categories selected.</strong></h5>);       
    }

    return (
    	<div className="products-bar" >
          <nav className="navbar navbar-light navbar-center">
          {displayMessage}
          </nav>
  			  <ul className="list-group products-bar-ul">
  				    {products}
      		</ul>
    	</div>
    );
	}
	else {
		return (null);
	}
  }
}

export default connect(
  mapStateToProps
)(ProductsBar)