import React, {Component} from 'react'
import DaftarBuku from './DaftarBuku'
import DetailBuku from './DetailBuku'

class DataBuku extends Component{
    state={
        daftarBuku:[
            
            {id:'1', judul:'Dongeng Sebelum Tidur', pengarang:'3 beradik', tahun:'1992', penerbit:'Batu bata', sinopsis:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', vote: 10},
            {id:'2', judul:'Kata-kata Mutiara', pengarang:'Pujangga', tahun:'1985', penerbit:'Lintas Alam', sinopsis:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', vote: 9},
            {id:'3', judul:'Di Hulu Sungai Bertuah', pengarang:'Agfi', tahun:'2003', penerbit:'Flame On', sinopsis:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', vote: 12},
            {id:'4', judul:'Tutorial React Native', pengarang:'idrcorner', tahun:'2019', penerbit:'idrcorner', sinopsis:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', vote: 5}
    ],
    bukuTerpilih: null 
    }

    bukuDipilih =(buku)=>{
        this.setState({
            bukuTerpilih: buku
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                        <DaftarBuku bukudipilih={this.bukuDipilih} daftarbuku={this.state.daftarBuku}/>
                    </div>
                    <div className="col-md-6">
                        <DetailBuku bukuterpilih={this.state.bukuTerpilih}/>
                    </div>
                    
            </div>
        )
    }
}

export default DataBuku