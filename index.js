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
