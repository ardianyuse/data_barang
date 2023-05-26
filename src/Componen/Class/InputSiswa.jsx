import React from "react";
import { Table, Container, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const dataSiswas = [
    {
        id: 1,
        nama: 'Ayub',
        alamat: 'Jakarta',
        jenkel: 'L',
        beasiswa: false,
        jurusan: 'Komputer',

    },
    {
        id: 2,
        nama: 'Susi',
        alamat: 'Bandung',
        jenkel: 'P',
        beasiswa: true,
        jurusan: 'Hotel',

    },


]


class InputSiswa extends React.Component {

    constructor() {
        super()
        this.state = {
            nama: '',
            alamat: '',
            jenkel: '',
            beasiswa: false,
            jurusan: '',
            id: '',
            namaTombol: "Tambah"
        }
    }

    handleEditButton = (data) => {
        // console.log(dataSiswas);
        const newDatas = dataSiswas.filter(
            i => i.id === data
        )
        this.setState({
            nama: newDatas[0].nama,
            alamat: newDatas[0].alamat,
            jenkel: newDatas[0].jenkel,
            beasiswa: newDatas[0].beasiswa,
            jurusan: newDatas[0].jurusan,
            id: newDatas[0].id,
            namaTombol: "Ubah",
            modal : false
        })


        
        
    }

    toggle = () => {
        const modal = (this.state.modal) ? false : true;
        this.setState({modal : modal});
    }

    clearState = () => {
        this.setState({
            nama: '',
            alamat: '',
            jenkel: '',
            beasiswa: '',
            jurusan: '',
            id: '',
            namaTombol: "Tambah",
        })
    }

    handleSubmitButtom = () => {


        if (this.state.namaTombol === "Ubah") {
            // edit
            // alert(`Ini data akan dirubah`);

            const result = dataSiswas.findIndex((a) => a.id === this.state.id);
            // console.log(result);
            const newDataSiswas = dataSiswas;
            newDataSiswas.splice(result, 1, this.state);
            this.clearState();

        } else {
            let hasilSubmit = this.state;
            hasilSubmit.id = Math.floor(Math.random() * 10000000);
            // Cek dulu validasi nya
            // Cek nama
            if (this.state.nama.trim() === "") {
                alert('Maaf Nama Kosong');

            } else {

                dataSiswas.push(hasilSubmit);
                this.clearState();
            }
        }
    }

    handleHapusButton = (data) => {

        this.toggle();
        // const result = dataSiswas.findIndex((a) => a.id === data);
        // // console.log(result);
        // const newDataSiswas = dataSiswas;
        // newDataSiswas.splice(result, 1);
        // this.clearState();
    }

    render() {
        return (
            <>
                <Container>
                    <h1 className="mt-5 mb-2">Daftar Siswa</h1>
                    <Table
                        hover
                        responsive
                        striped
                        bordered
                    >
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Nama
                                </th>
                                <th>
                                    Alamat
                                </th>
                                <th>
                                    Jenis Kelamin
                                </th>
                                <th>
                                    Jurusan
                                </th>
                                <th>
                                    Jalur Beasiswa
                                </th>
                                <th>
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataSiswas.map((siswa, i) =>
                                <tr key={i}>
                                    <th scope="row">
                                        {++i}
                                    </th>
                                    <td>
                                        {siswa.nama}
                                    </td>
                                    <td>
                                        {siswa.alamat}
                                    </td>
                                    <td>
                                        {siswa.jenkel}
                                    </td>
                                    <td>{siswa.jurusan}</td>
                                    <td> {siswa.beasiswa.toString()} </td>
                                    <td>
                                        <div>
                                            <Button
                                                color="info"

                                                onClick={
                                                    () => { this.handleEditButton(siswa.id) }
                                                }
                                            >
                                                Ubah
                                            </Button>
                                            &nbsp;
                                            <Button
                                                color="danger"

                                                onClick={() => {
                                                    this.handleHapusButton(siswa.id)
                                                }}
                                            >
                                                Hapus
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </Table>

                    {/* Ini adalah form input */}

                    <Form>
                        <FormGroup>
                            <Label for="nama">
                                Nama
                            </Label>
                            <Input
                                id="nama"
                                name="nama"
                                placeholder="Tulis Nama"
                                type="text"
                                value={this.state.nama}
                                onChange={(a) => {
                                    return this.setState({ nama: a.target.value })
                                }}

                                invalid={this.state.nama.trim() === "" && true}
                                valid={this.state.nama.trim() !== "" && true}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Jurusan
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={this.state.jurusan}
                                onChange={(a) => {
                                    return this.setState({ jurusan: a.target.value })
                                }}
                            >
                                <option>
                                    Hotel
                                </option>
                                <option>
                                    Akuntansi
                                </option>
                                <option>
                                    Komputer
                                </option>
                                <option>
                                    Elektro
                                </option>
                                <option>
                                    Teknik Sipil
                                </option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Alamat
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                                value={this.state.alamat}
                                onChange={(a) => {
                                    return this.setState({ alamat: a.target.value })
                                }}
                            />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>
                                Jenis Kelamin
                            </legend>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                    checked={this.state.jenkel === 'L'}
                                    value='L'
                                    onChange={(a) => {
                                        return this.setState({ jenkel: a.target.value })
                                    }}
                                />
                                <Label check>
                                    Laki-laki
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                    checked={this.state.jenkel === 'P'}
                                    value='P' onChange={(a) => {
                                        return this.setState({ jenkel: a.target.value })
                                    }}
                                />
                                <Label check>
                                    Perempuan
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" checked={this.state.beasiswa === true}
                                onChange={(a) => {
                                    return this.setState({ beasiswa: a.target.checked })
                                }} />
                            <Label check>
                                Beasiswa
                            </Label>
                        </FormGroup>
                        <Button onClick={this.handleSubmitButtom}>
                            {this.state.namaTombol}
                        </Button>
                    </Form>
                    <br />


                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                           Yakin Mau dihapus ??
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>
                              Ya
                            </Button>
                            <Button color="secondary" onClick={this.toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>


                </Container>
            </>
        )
    }

}

export default InputSiswa;