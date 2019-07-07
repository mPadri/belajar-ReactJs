import React from 'react'

const Buku =({buku,bukudipilih})=>{

    const onClickHandler =()=>{
        bukudipilih(buku)
    }
    return(
        <div className="card m-3 shadow-sm" onClick={onClickHandler} style={{cursor:'pointer'}}>
            <h3 className="p-1 pl-2">{buku.judul}</h3>
            <p className="pl-2">Pengarang: {buku.pengarang}</p>
        </div>
    )
}

export default Buku