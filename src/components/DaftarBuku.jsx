import React from 'react'
import Buku from './Buku';

const DaftarBuku =({daftarbuku, bukudipilih})=>{

    const listBuku = daftarbuku.map(buku =>{

        return(
            <div key={buku.id}>
                <Buku buku={buku} bukudipilih={bukudipilih}/>
            </div>
        )
    })
    return(
        <div>
            {listBuku}
        </div>
    )
}

export default DaftarBuku