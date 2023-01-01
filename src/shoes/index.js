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
      gioHang: [],
    };
  }
  handleItem = (shoes) => {
    this.setState({
      detail: shoes,
    });
  };

  //Thêm sản phẩm
  addItem = (shoes) => {
    shoes = { ...shoes, soLuong: 1 };
    // kiểm tra sản phẩm có hay chưa
    let checkShoes = this.state.gioHang.find((sp) => sp.id === shoes.id);
    console.log(checkShoes);
    if (checkShoes) {
      checkShoes.soLuong += 1;
    } else {
      this.state.gioHang.push(shoes);
    }

    console.log(shoes);
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  deleteItem = (item) => {
    console.log(item);
    this.state.gioHang = this.state.gioHang.filter((p) => p.id !== item);
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  tangGiamItem = (idItem, soLuong) => {
    console.log(idItem, soLuong);
    let sp = this.state.gioHang.find((spGH) => spGH.id === idItem);
    if (sp) {
      sp.soLuong += soLuong;
      if (sp.soLuong < 1) {
        if (window.confirm("bạn có muốn xóa sản phẩm không")) {
          this.deleteItem(idItem);
        } else {
          sp.soLuong = 1;
        }
      }
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
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
              <Cart
                gioHang={this.state.gioHang}
                deleteItem={this.deleteItem}
                tangGiam={this.tangGiamItem}
              />
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
