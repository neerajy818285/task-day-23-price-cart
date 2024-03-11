import { useState } from "react"
import { Card } from "react-bootstrap"
import Button from "./button"

export function Cards ({prod,idx,count,setCount}){
  const [show , setshow] = useState(false)

  function addToCart (){
    setshow(!show)
    setCount(count+1)
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  function removeFromCart(){
    setshow(!show)
    setCount(count-1)
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  return(
 
    <Card className='card-data' style={{ width: '18rem' }}>

{prod.productName === "Samsung Galaxy s22" ||prod.productName  === "Google pixel" ||
prod.productName ==="Redmi note 12 pro" ||prod.productName ==="Sony Xperia 10"?
                        <div className="badge bg-dark text-white position-absolute" 
                        style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div> :
                        " "}
<Card.Img variant="top" className='size' src={prod.productImage} />
<Card.Body>
  <Card.Title>{prod.productName}</Card.Title>
  <Card.Text>{prod.price}</Card.Text>
  <Card.Text>{prod.rating}</Card.Text>

  {!show ? <Button
  name="Add Cart"
  bgClr="lightskyblue"
  onClick={addToCart}
  /> : ""}


{show ? <Button
 name="Remove Cart"
 bgClr="crimson"
 clr="white"
 onClick={removeFromCart}
/> : ""}

</Card.Body>
</Card>

  
  
  )

}