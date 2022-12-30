import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    const { detail } = this.props;
    return (
      <>
        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{detail.name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{detail.price}$</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{detail.description}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
