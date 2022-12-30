import React, { Component } from "react";

export default class Item extends Component {
  handleItem = () => {
    // console.log(this.props.shoes);
    this.props.getDetail(this.props.shoes);
  };
  addItem = () => {
    this.props.addItem(this.props.shoes);
  };

  render() {
    const { shoes } = this.props;
    return (
      <div className="col-4   mt-3">
        <div className="card">
          <img className="card-img-top" src={shoes.image} alt={shoes.name} />
          <div className="card-body">
            <h4 className="card-title">{shoes.name}</h4>
            <p className="card-text">{shoes.price}$</p>
            <button className="btn btn-info" onClick={this.handleItem}>
              Detail
            </button>
            <button
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#modelId"
              onClick={this.addItem}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
