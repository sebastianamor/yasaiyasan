import { Component } from 'react';
import Productos from "./Component/Productos"
import Layout from './Component/Layout';
import Title from './Component/Title';
import Navbar from './Component/Navbar';

class App extends Component{
  state ={
    productos: [
      { name : 'トマト', price :1500, img: '/productos/tomate.jpg' },
      { name : '豆', price :2500, img: '/productos/arveja.jpg' },
      { name : 'レタス', price :500, img: '/productos/lechuga.jpg' },
    ],
    carro : [], 
    esCarroVisible: false,
  }
  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find (x => x.name === producto.name)) {
      const neWCarro = carro.map ( x => x.name === producto.name 
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        :x  )
        return this.setState ({carro:neWCarro})

    }
   return this.setState ({
    carro: this.state.carro.concat({
      ...producto,
      cantidad: 1,
    })
   })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length  ){
      return
    }
    this.setState({ esCarroVisible : !this.state.esCarroVisible  })
  }
  render (){
    const { esCarroVisible } = this.state
  return ( 
    <div>
      <Navbar carro = {this.state.carro} 
       esCarroVisible={esCarroVisible} 
       mostrarCarro={this.mostrarCarro}  />
      <Layout>
        <Title />
      <Productos
      agregarAlCarro={this.agregarAlCarro }
      productos={this.state.productos}
      />
      </Layout>
    </div>
  )
 }
}
export default App;
