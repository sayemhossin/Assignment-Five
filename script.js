



const seats = document.getElementsByClassName('seat-name');

let availableSeat = 39
let seatBooking = 1
let totalPrice = 0
for(const seat of seats){
   seat.addEventListener('click',function(e){
    
    // seat count
    const totalSeat = document.getElementById('total-seat').innerText = availableSeat
    availableSeat--
    const bookingSeat = document.getElementById('seat-booking').innerText=seatBooking
    seatBooking++

e.target.style.backgroundColor = 'green'

   

    const seatName = e.target.innerText
    const price = 550;
     
    const seatNumber = document.getElementById('seat-number')
    const p =document.createElement('p')

    p.innerText = seatName
  
if(parseInt(seatNumber) <= 4){
  return 
}else{
  alert('back')
}



seatNumber.appendChild(p)

  


 
    // total price
    totalPrice = totalPrice + price

      document.getElementById('total-price').innerText = totalPrice
      document.getElementById('grand-total').innerText=totalPrice



   })
}


const discountBtn = document.getElementById('coupon-btn')
discountBtn.addEventListener('click',function(){

    const input = document.getElementById('input-field').value
    const couponCode = input
    

     if(couponCode === 'NEW15'){
      const discountPrice = document.getElementById('discount')
      const discountAmount = totalPrice * 15/100
      discountPrice.innerText = discountAmount


      const restTotal = document.getElementById('grand-total')
      restTotal.innerText= totalPrice - discountAmount
      document.getElementById('input-field').value =''
     
}
else if(couponCode === 'Couple 20'){
  const discountPrice = document.getElementById('discount')
      const discountAmount = totalPrice * 20/100
      discountPrice.innerText = discountAmount


      const restTotal = document.getElementById('grand-total')
      restTotal.innerText= totalPrice - discountAmount
      document.getElementById('input-field').value=''
}
else{
 
  
  document.getElementById('input-field').value =''
  document.getElementById('discount').innerText = '0'
  document.getElementById('grand-total').innerText=totalPrice

}

     

})