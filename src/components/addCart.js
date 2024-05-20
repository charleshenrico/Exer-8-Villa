import React from 'react';

class AddToCartButton extends React.Component {
  handleClick = () => {
    const { itemName } = this.props;
    console.log(`Added ${itemName} to Cart`);
  }

  render() {
    return (
      <button type="submit" className="submit1" onClick={this.handleClick}>
        Add To Cart
      </button>
    );
  }
}

export default AddToCartButton;
