import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

function Detail(props){

  let {id} = useParams();
  let findProduct = props.shoes.find(function(x){
    return x.id == id
  });
  let [alert,setAlert] = useState(true);

  useEffect(()=>{ 
    setTimeout(()=>{setAlert(false)},2000)}
    )


    return(
      <div className="container">

      {
        alert == true? <div className ="alert alert-warning">
          2초이내 구매시 할인
        </div> : null
      }


    <div className="row">
      <div className="col-md-6">
        <img src={'https://codingapple1.github.io/shop/shoes'+ findProduct.id+'.jpg'} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{findProduct.title}</h4>
        <p>{findProduct.content}</p>
        <p>{findProduct.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    )
}

  export default Detail;