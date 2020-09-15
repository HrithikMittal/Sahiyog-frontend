import React from "react";
import axios from "axios";
import makeToast from "../../components/Toaster";

import Modal from "./Modal/Modal";
import Form from "../Form/Form";

import styles from "./Home.module.css";

class Medicine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [],
      showModal: false,
      isEditing: false,
      formdata: {
        rxRequired: false,
        price: 0,
        name: "",
        packing: 0,
        discount: 0,
        validated: false,
        composition: "",
        brandName: "",
      },
      editingId: null,
      search: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://sahiyog.herokuapp.com/medicine/getAllMedicines")
      .then((response) => {
        const medicines = response.data.medicine;
        this.setState({ medicines: medicines });
      })
      .catch((err) => makeToast("error", "Request Failed"));
  }

  deleteHandler = (e, id) => {
    console.log(id);
    e.preventDefault();
    axios
      .delete(`https://sahiyog.herokuapp.com/medicine/deleteMedicine/${id}`)
      .then((res) => {
        console.log(res);
        makeToast("success", "Deleted Succesfully !!");
        let medicines = [...this.state.medicines];
        medicines = medicines.filter((med) => med._id !== id);
        this.setState({ medicines: medicines });
      })
      .catch((err) => makeToast("error", "Request Failed"));
  };

  startEditHandler = (e, id) => {
    console.log(id);
    e.preventDefault();
    const medicine = this.state.medicines.find((med) => med._id === id);
    console.log(medicine);
    const formdata = {};
    for (let key in medicine) {
      if (key !== "_id" && key !== "__v") {
        formdata[key] = medicine[key];
      }
    }
    this.setState({
      isEditing: true,
      showModal: true,
      editingId: id,
      formdata: formdata,
    });
  };

  startCreateHandler = (e) => {
    e.preventDefault();
    const form = {};
    for (let key in this.state.medicines[0]) {
      if (key !== "__id" && key !== "__v") {
        if (key === "rxRequired" || key === "validated") {
          form[key] = false;
        } else if (key === "discount" || key === "price") {
          form[key] = 0;
        } else {
          form[key] = "";
        }
      }
    }
    this.setState({ isEditing: false, showModal: true, formdata: form });
  };

  submissionHandler = (e) => {
    e.preventDefault();
    if (this.state.isEditing) {
      axios
        .put(
          `https://sahiyog.herokuapp.com/medicine/updateMedicine/:${this.state.editingId}`
        )
        .then((response) => {
          makeToast("success", "Edited Succesfully");
          const medicines = [...this.state.medicines];
          let size = medicines.length;
          let i = 0;
          while (i < size) {
            if (medicines[i]._id === this.state.editingId) {
              for (let key in this.state.formdata) {
                medicines[i][key] = this.state.formdata[key];
              }
              break;
            }
            i++;
          }
          this.setState({
            medicines: medicines,
            editingId: null,
            isEditing: false,
            showModal: false,
          });
        })
        .catch((err) => makeToast("error", "Request Failed"));
    } else {
      axios
        .post("https://sahiyog.herokuapp.com/medicine/createMedicine")
        .then((response) => {
          makeToast("success", "Created Successfull !!");
          this.setState({ showModal: false });
        })
        .catch((err) => makeToast("error", "Request failed"));
    }
  };

  clearModal = (e) => {
    e.preventDefault();
    this.setState({ showModal: false });
  };

  checkBoxHandler = (e) => {
    let key = e.target.name;
    const form = { ...this.state.formdata };
    form[key] = !form[key];
    this.setState({ formdata: form });
  };

  inputChangeHandler = (e) => {
    e.persist();
    const form = { ...this.state.formdata };
    form[e.target.name] = e.target.value;
    this.setState({ formdata: form });
  };

  searchHandler = (e) => {
    e.persist();
    this.setState({ search: e.target.value });
  };

  render() {
    var file = this.state.medicines.map((ele) => {
      return (
        <tr key={ele._id}>
          <th>{ele.name}</th>
          <th>{ele.brandName}</th>
          <th>{ele.packing}</th>
          <th>{ele.composition}</th>
          <th>
            {ele.rxRequired ? (
              <i class="fa fa-check-circle" style={{ color: "#ADD8E6" }}></i>
            ) : (
              <i class="fa fa-times-circle" style={{ color: "red" }}></i>
            )}
          </th>
          <th>{ele.price}</th>
          <th>{ele.discount}</th>
          <th>
            {ele.validated ? (
              <i class="fa fa-check-circle" style={{ color: "#ADD8E6" }}></i>
            ) : (
              <i class="fa fa-times-circle" style={{ color: "red" }}></i>
            )}
          </th>
          <th>
            {
              <button
                style={{ display: "inline-block", marginRight: "8px" }}
                className="btn btn-primary"
                onClick={(e) => this.startEditHandler(e, ele["_id"])}
              >
                Edit
              </button>
            }
          </th>
          <th>
            <button
              style={{ display: "inline-block" }}
              className="btn btn-danger"
              onClick={(e) => this.deleteHandler(e, ele["_id"])}
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
    return (
      <React.Fragment>
        <Modal
          show={this.state.showModal}
          modalclosed={(e) => this.clearModal(e)}
        >
          <Form
            submitHandler={(e) => this.submissionHandler(e)}
            checkBoxHandler={(e) => this.checkBoxHandler(e)}
            onChangeValues={(e) => this.inputChangeHandler(e)}
            cancel={(e) => this.clearModal(e)}
            data={this.state.formdata}
          />
        </Modal>
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <button
              type="button"
              className={"btn btn-primary"}
              onClick={(e) => this.startCreateHandler(e)}
            >
              Create Medicine
            </button>
          </div>
        </div>
        {/* <form className={["form-inline", styles.search].join(" ")}>
          <i className="fas fa-search" aria-hidden={true}></i>
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "500px" }}
            value={this.state.search}
            onChange={this.searchHandler}
          />
        </form> */}
        <div style={{ overflow: "auto" }}>
          <div style={{ overflow: "auto", height: "900px" }}>
            <table
              className="table "
              style={{
                tableLayout: "fixed",
                margin: "0px 100px 0px 60px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ width: "100px" }}>Name</th>
                  <th style={{ width: "100px" }}>Brand Name</th>
                  <th style={{ width: "100px" }}>Packing</th>
                  <th style={{ width: "100px" }}>Composition</th>
                  <th style={{ width: "100px" }}>RxRequired</th>
                  <th style={{ width: "100px" }}>Price</th>
                  <th style={{ width: "100px" }}> Discount</th>
                  <th style={{ width: "100px" }}>Validated</th>
                  <th style={{ width: "100px" }}>EDIT</th>
                  <th style={{ width: "100px" }}>DELETE</th>
                </tr>
              </thead>
              <tbody>{file}</tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Medicine;
