import React, { Component } from "react";

class FormMakanan extends Component {
  constructor(props) {
    super(props);

    //handle state for input element
    this.state = { pesanan: "", jumlah: "" };

    //binding functions
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //create ref for the input element
    this.pesanan = React.createRef();
  }

  //handle onchange to prevent error
  handleChange(e) {
    this.setState({ pesanan: e.target.value });
  }
  handleChangeJumlah(e) {
    this.setState({ jumlah: e.target.value });
  }

  //handle when submitting the form (Showing the alert)
  handleSubmit(e) {
    e.preventDefault();
    alert(
      "Pesanan Anda Adalah : " +
        this.state.pesanan +
        " | Jumlah Pesanan : " +
        this.state.jumlah
    );
    this.setState({ pesanan: "", jumlah: "" });
    this.pesanan.current.focus();
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.pesanan}
              onChange={this.handleChange}
              ref={this.pesanan}
              placeholder="Masukan Pesanan Anda"
            />
            <input
              type="number"
              value={this.state.jumlah}
              onChange={this.handleChangeJumlah}
              placeholder="Masukan Jumlah Pesanan"
            />
            <br />
            <br />
            <input type="submit" value={"pesan"} />
          </form>
        </center>
      </div>
    );
  }
}

export default FormMakanan;
