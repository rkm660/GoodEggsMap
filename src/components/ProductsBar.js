import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    products: state.data.products,
    farmers: state.data.farmers,
});

class ProductsBar extends Component {
  
  constructor(props) {
        super(props);
        console.log(props);
  }


  render() {

    if (this.props.products && this.props.farmers){
 	    const products = this.props.products.filter(product => {return this.props.categories[product['product_category']];}).map(product => {
      return (<li key={product['_id'] + '_li'} className="list-group-item product-item"><img key={product['_id'] + '_img'} src={'http://' + product["product_pic"]} width='100%' height='100%'/></li>);
  	});
    return (
    	<div className="products-bar">
			<ul className="list-group">
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