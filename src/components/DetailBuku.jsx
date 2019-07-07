import React from 'react'

const DetailBuku = (props) => {
    if (!props.bukuterpilih) {
        return (
            <div className="pt-2">Detail Buku</div>
        )
    }
    return (
        <div className="pt-3">
            <table className="table">
                <tbody>
                    <tr>
                        <td>Judul Buku</td>
                        <td>{props.bukuterpilih.judul}</td>
                    </tr>
                    <tr>
                        <td>Pengarang</td>
                        <td>{props.bukuterpilih.pengarang}</td>
                    </tr>
                    <tr>
                        <td>Tahun Terbit</td>
                        <td>{props.bukuterpilih.tahun}</td>
                    </tr>
                    <tr>
                        <td>Penerbit</td>
                        <td>{props.bukuterpilih.penerbit}</td>
                    </tr>
                    <tr>
                        <td>Sinopsis</td>
                        <td>{props.bukuterpilih.sinopsis}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailBuku