import React, { Component } from "react";
import Item from "./shoesitem";
import data from "./data.json";
import Detail from "./detail";
import Cart from "./cart";
export default class Shoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: data,
      detail: data[0],
      gioHang: [
        {
          name: "Adidas Prophere Black White",
          price: 450,
          image:
            "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
          soLuong: 1,
        },
      ],
    };
  }
  handleItem = (shoes) => {
    this.setState({
      detail: shoes,
    });
  };

  //Thêm sản phẩm
  addItem = (shoes) => {
    
  };

  renderShoes = () => {
    const { listItem } = this.state;

    return listItem.map((item) => {
      return (
        <Item
          key={item.id}
          shoes={item}
          getDetail={this.handleItem}
          addItem={this.addItem}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Shoes Shop</h3>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h3>Detail Shoes</h3> <Detail detail={this.state.detail} />
              <Cart gioHang={this.state.gioHang} number={1} />
            </div>
            <div className="col-8">
              {" "}
              <div className="row">{this.renderShoes()} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
