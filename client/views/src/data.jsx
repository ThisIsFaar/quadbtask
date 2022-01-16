import React, { Component } from "react";
import { getData } from "./helper/getdata";

class FormData extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    getData().then((res) => {
      this.setState({ data: res });
    });
  }
  render() {
    {
      console.log(getData());
    }
    return (
      <div id="main">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">userId</th>
              <th scope="col">userName</th>
              <th scope="col">userEmail</th>
              <th scope="col">userPassword</th>
              <th scope="col">userImage</th>
              <th scope="col">totalOrders</th>
              <th scope="col">createdAt</th>
              <th scope="col">lastLoggedIn</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((d) => {
              return (
                <tr key={d.id}>
                  <th scope="row">{d.user_id}</th>
                  <td>{d.user_name}</td>
                  <td>{d.user_email}</td>
                  <td>{d.user_password}</td>
                  <td> </td>
                  <td>{d.total_orders}</td>
                  <td>{d.createdAt}</td>
                  <td>{d.updatedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FormData;
