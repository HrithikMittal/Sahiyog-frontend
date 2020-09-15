import React from "react";
//import { withRouter, Link } from "react-router-dom";

import styles from "./Form.module.css";

class Form extends React.Component {
  render() {
    return (
      // <div className="fluid-container" style={{ width: "300px" }}>
      //   <h1 className="text-uppercase">Add Medicine</h1>

      //   <form onSubmit={(e) => this.props.submitHandler(e)}>
      //     <div className="form-row">
      //       <div className="form-check">
      //         <input
      //           className="form-check-input catagory"
      //           type="checkbox"
      //           name="rxRequired"
      //           onChange={(e) => this.props.checkBoxHandler(e)}
      //           checked={this.props.data["rxRequired"]}
      //         />
      //         <label className="form-check-label" htmlFor="popularstories">
      //           rxRequired
      //         </label>
      //       </div>
      //     </div>

      //     <div className="form-row">
      //       <label htmlFor="title">Name</label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         name="name"
      //         onChange={(e) => this.props.onChangeValues(e)}
      //         required
      //         value={this.props.data["name"]}
      //       />
      //     </div>

      //     <div className="form-row">
      //       <div className="col-md-6 mb-3">
      //         <div className="form-group">
      //           <label htmlFor="title">Price</label>
      //           <input
      //             type="number"
      //             className="form-control"
      //             name="price"
      //             onChange={(e) => this.props.onChangeValues(e)}
      //             required
      //             value={this.props.data["price"]}
      //           />
      //         </div>
      //       </div>

      //       <div className="col-md-6 mb-3">
      //         <div className="form-group">
      //           <label htmlFor="title">discount</label>
      //           <input
      //             type="number"
      //             className="form-control"
      //             name="discount"
      //             onChange={(e) => this.props.onChangeValues(e)}
      //             required
      //             value={this.props.data["discount"]}
      //           />
      //         </div>
      //       </div>
      //     </div>

      //     <div className="form-row">
      //       <div className="col-md-6 mb-3">
      //         <div className="form-group">
      //           <label htmlFor="title">packing</label>
      //           <input
      //             type="text"
      //             className="form-control"
      //             name="packing"
      //             onChange={(e) => this.props.onChangeValues(e)}
      //             required
      //             value={this.props.data["packing"]}
      //           />
      //         </div>
      //       </div>
      //       <div className="col-md-6 mb-3" style={{ whiteSpace: "nowrap" }}>
      //         <input
      //           className="form-check-input catagory"
      //           type="checkbox"
      //           name="validated"
      //           onChange={(e) => this.props.checkBoxHandler(e)}
      //           checked={this.props.data["validated"]}
      //         />
      //         <label className="form-check-label" htmlFor="popularstories">
      //           Validated
      //         </label>
      //       </div>
      //     </div>

      //     <div className="form-row">
      //       <label htmlFor="title">Composition</label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         name="composition"
      //         onChange={(e) => this.props.onChangeValues(e)}
      //         required
      //         value={this.props.data["composition"]}
      //       />
      //     </div>

      //     <div className="form-row">
      //       <label htmlFor="title">Brand Name</label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         name="brandName"
      //         onChange={(e) => this.props.onChangeValues(e)}
      //         required
      //         value={this.props.data["brandName"]}
      //       />
      //     </div>
      //     <div className="form-row">
      //       <div className="col-md-6 mb-3">
      //         <button
      //           type="submit"
      //           className="btn btn-primary btn-block btn-lg m-2"
      //         >
      //           Create
      //         </button>
      //       </div>
      //       <div className="col-md-6 mb-3">
      //         <button
      //           className="btn btn-danger btn-block btn-lg m-2"
      //           onClick={this.props.cancel}
      //         >
      //           Cancel
      //         </button>
      //       </div>
      //     </div>
      //   </form>
      // </div>
      <div
        className="fluid-container"
        style={{ width: "100%", backgroundColor: "palegoldenrod" }}
      >
        <div className="row">
          <h4>Add Medicine</h4>
        </div>
        <div className="row" style={{ backgroundColor: "plum" }}>
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Medicine Name"
              />
            </div>
            <div class="form-group">
              <label for="brandName">Brand Name</label>
              <input
                type="text"
                class="form-control"
                id="brandName"
                placeholder="Brand Name"
              />
            </div>
            <div class="form-group">
              <label for="packing">Packing</label>
              <input
                type="text"
                class="form-control"
                id="packing"
                placeholder="Packing"
              />
            </div>
            <div class="form-group">
              <label for="composition">Composition</label>
              <input
                type="text"
                class="form-control"
                id="composition"
                placeholder="Composition"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
