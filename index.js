function getElement(id) {
    return document.getElementById(id)
}

function setQuantity(isIncrease, quantityInput, price){
    const quantity= parseFloat(getElement(quantityInput).value)
    let updateQuantity
    isIncrease? updateQuantity= quantity+1 : updateQuantity= quantity-1
    const updatePrice= price==='price2'? 59*updateQuantity : 1219*updateQuantity
    getElement(quantityInput).value= updateQuantity
    getElement(price).innerText= updatePrice
    cartCalculator()
}

getElement('increaseBtn1').addEventListener('click', function(){ 
    const quantity= parseFloat(getElement('quantityInput1').value)
    if(quantity===10 ){
        return
    }
    setQuantity(true, 'quantityInput1', 'price1')
})

getElement('decreaseBtn1').addEventListener('click', function(){
    const quantity= parseFloat(getElement('quantityInput1').value)
    if(quantity===1 ){
        return
    }
    setQuantity(false, 'quantityInput1', 'price1')
})

getElement('increaseBtn2').addEventListener('click', function(){ 
    const quantity= parseFloat(getElement('quantityInput2').value)
    if(quantity===10 ){
        return
    }
    setQuantity(true, 'quantityInput2', 'price2')
})

getElement('decreaseBtn2').addEventListener('click', function(){
    const quantity= parseFloat(getElement('quantityInput2').value)
    if(quantity===1 ){
        return
    }
    setQuantity(false, 'quantityInput2', 'price2')
})

function cartCalculator(){
    const quantity1= parseFloat(getElement('quantityInput1').value)
    const quantity2= parseFloat(getElement('quantityInput2').value)

    const price1= parseFloat(getElement('price1').innerText)
    const price2= parseFloat(getElement('price2').innerText)

    const subTotal= (quantity1*price1) + (quantity2*price2)

    const tax=  Math.round(subTotal*0.1)

    getElement('vat').innerText= tax
    getElement('subtotal').innerText= subTotal
    getElement('total').textContent= subTotal+tax

}