import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { gioHang, deleteItem, tangGiam } = this.props;
    console.log(gioHang.length);

    return (
      <div>
        {/* Button trigger modal */}
        {/* <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          Launch
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <td>STT </td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm </td>
                      <td>Đơn giá </td>
                      <td>Số lượng</td>
                      <td>Thành tiền</td>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((gioHang, index) => {
                      return (
                        <tr key={gioHang.id}>
                          <td>{index + 1}</td>
                          <td>
                            <img src={gioHang.image} alt="" width={50} />
                          </td>
                          <td>{gioHang.name}</td>
                          <td>{gioHang.price}$</td>
                          <td>
                            <button
                              className="btn btn-primary mx-2 "
                              onClick={() => {
                                tangGiam(gioHang.id, 1);
                              }}
                            >
                              +
                            </button>
                            {gioHang.soLuong}
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => {
                                tangGiam(gioHang.id, -1);
                              }}
                            >
                              -
                            </button>
                          </td>
                          <td>{gioHang.price * gioHang.soLuong}$ </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                deleteItem(gioHang.id);
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
