
import React from "react";

import { Table, Button, Form, FormGroup, Label, Input, FormText, Container, } from "reactstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import DetailBarang from "./DetailBarang";


const url = "https://data-barang-96d8a-default-rtdb.asia-southeast1.firebasedatabase.app/barang.json";

class Barang extends React.Component {
    constructor() {
        super();
        this.state = {
            nama_barang: '',
            stok: 0,
            harga: 0,
            errors: {
                nama_barang: '',
                harga: '',
                harga: '',
            }

        }
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        // console.log(type)
        this.setState({
            [name]: e.target.value
        })
    }

    componentDidMount() {


    }

    handleButtonClick = () => {
        const harga = Number(this.state.harga);
        const nama = this.state.nama_barang
        const stok = this.state.stok
        // console.log(typeof this.state.harga);
        // console.log(harga);
        let errors = this.state.errors;
        if (Number.isNaN(harga)) {
            // console.log(`Bukan angka`);
            errors.harga = 'harus diisi number';
        } else if (harga === 0) {
            errors.harga = 'Harga barang harus diisi';
        } else {
            errors.harga = '';
        }

        if (!nama) {
            errors.nama_barang = 'Nama barang harus diisi';
        } else {
            errors.nama_barang = '';
        }

        this.setState({
            errors: errors
        })

        // console.log(this.state);
        let formValid = true;
        for (const propName in errors) {
            if (Object.hasOwnProperty.call(errors, propName)) {
                const element = errors[propName];
                // console.log(element);
                if (element !== '') {
                    formValid = false;
                }

            }
        }

        if (formValid) {
            // alert(`data success`);
            const myFetch = async () => {
                try {
                    let response = await fetch(url,
                        {
                            method: 'post',
                            body: JSON.stringify({
                                nama_barang: nama,
                                harga: harga,
                                stok: stok,
                            })
                        }
                    )

                    if (!response.ok) {
                        throw new Error(response.status);
                    }


                } catch (e) {
                    console.log(`Terjadi gangguan dengan pesan ${e}`)
                }
            }

            myFetch();
        }
    }

    render() {
        return (
            <>
                <Container>
                    <h1>Daftar Barang di Toko</h1>
                    <Table bordered
                        responsive
                        striped>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Stock</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.dataBarang.map((brg, i) =>
                                    <DetailBarang nomor={++i} harga={brg.harga} nama={brg.nama_barang} key={i} id={brg.id} stok={brg.stok} />
                                )
                            }

                        </tbody>
                    </Table>

                    <Form>
                        <FormGroup>
                            <Label for="nama_barang">
                                Nama Barang
                            </Label>
                            <Input
                                id="nama_barang"
                                name="nama_barang"
                                type="text"
                                onChange={this.handleInputChange}
                                value={this.state.nama_barang}
                            />
                            {this.state.errors.nama_barang && <small className='text-danger'>{this.state.errors.nama_barang}</small>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="harga">
                                Harga Barang
                            </Label>
                            <Input
                                id="harga"
                                name="harga"
                                type="text"
                                value={this.state.harga}
                                onChange={this.handleInputChange}
                            />
                            {this.state.errors.harga && <small className='text-danger'>{this.state.errors.harga}</small>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="stok">
                                Stok Barang
                            </Label>
                            <Input
                                id="stok"
                                name="stok"
                                type="number"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <Button onClick={this.handleButtonClick}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </>
        )
    }
}

export default Barang;