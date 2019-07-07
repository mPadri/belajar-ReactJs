import React from 'react'
import Buku from './Buku'

const FilterBuku =({daftarbuku,bukudipilih})=>{
    
    const listBuku = daftarbuku.map(buku =>{

        let minstok = buku.vote >=10 ? (
            <div key={buku.id}>
                <Buku buku={buku} bukudipilih={bukudipilih}/>
            </div>
        ):(null)
        return minstok
        
    })
    return(
        <div>
            {listBuku}
        </div>
    )

    
}

export default FilterBuku