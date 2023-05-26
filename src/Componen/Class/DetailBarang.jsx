import React from "react";
import Tombol from "./Tombol";
import { Button } from "reactstrap";
import { Format } from "./Format";
export default
    class DetailBarang extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nama: this.props.nama,
            harga: this.props.harga,
            i: this.props.id,
            stok: this.props.stok,
        }
    }

    handlerTombol = (e) => {
        // console.log('dari tombol '+e.id);

        const url = "https://data-barang-96d8a-default-rtdb.asia-southeast1.firebasedatabase.app/barang/" + e.id + ".json";
        if (e.tipe === 'tambah') {

            const myFetch = async () => {
                try {
                    let response = await fetch(
                        url,
                        {
                            method: "PATCH",
                            body: JSON.stringify({
                                'stok': e.stoks + 1
                            })
                        }
                    );
                    if (!response.ok) {
                        // throw new Error(response.status);
                        console.log('ERROR WOY')
                    }

                    this.setState(
                        {
                            stok: ++e.stoks,
                        }
                    )


                } catch (e) {

                }
            }
            myFetch();


        } else {


            const myFetch = async () => {
                try {
                    let response = await fetch(
                        url,
                        {
                            method: "PATCH",
                            body: JSON.stringify({
                                'stok': e.stoks - 1
                            })
                        }
                    );
                    if (!response.ok) {
                        // throw new Error(response.status);
                        console.log('ERROR WOY')
                    }

                    this.setState(
                        {
                            stok: --e.stoks,
                        }
                    )


                } catch (e) {

                }
            }
            myFetch();
        }
        // return alert('Hallo');
    }

    handleTombolHapus = (data) => {
        // console.log(data);
        const url = "https://data-barang-96d8a-default-rtdb.asia-southeast1.firebasedatabase.app/barang/" + data + ".json";

        const myFetch = async () => {
            try {
                let response = await fetch(url,
                    {
                        method: 'DELETE',
                    }
                )



                if (!response.ok) {
                    throw new Error(response.status);
                }

                this.setState({
                    nama: '',
                    harga: '',
                    i: '',
                    stok: '',
                });

            } catch (e) {
                console.log(`Terjadi gangguan dengan pesan ${e}`)
            }
        }

        myFetch();
    }



    render() {
        return (
            <>

                < tr >
                    <th>{this.props.nomor}</th>
                    <th>{this.state.nama}</th>
                    <th>{Format(this.state.harga)}</th>
                    <th>{this.state.stok}</th>
                    <th>
                        {
                            <Tombol id={this.state.i} stok={this.state.stok} onTombol={this.handlerTombol} />
                        }
                        ||
                        <Button
                            color="danger"

                            onClick={() => this.handleTombolHapus(this.state.i)}
                        >
                            Hapus
                        </Button>


                    </th>
                </tr >
            </>
        )
    }
}

