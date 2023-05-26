import React from "react";
import { Table, Button, Alert } from "reactstrap";
class Tombol extends React.Component {

    constructor(props) {
        super(props);
    }

    handleButtonClickTambah = () => {

        this.props.onTombol({ stoks: this.props.stok, tipe: "tambah",id :this.props.id })
    }
    handleButtonClickKurang = () => {

        this.props.onTombol({ stoks: this.props.stok, tipe: "kurang",id :this.props.id })
    }

    render() {
        return (
            <>
                <Button color="success" onClick={this.handleButtonClickTambah}>Tambah </Button> ||  
                {
                    (this.props.stok >= 1) ? <Button onClick={this.handleButtonClickKurang}>Kurangi</Button> : " Stok Habis"
                }
                
            </>
        )
    }
}

export default Tombol;