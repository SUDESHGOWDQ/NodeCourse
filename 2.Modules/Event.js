const EventEmiiter = require('events')

const emitter = new EventEmiiter()


emitter.on('Order Pizza',(size,topping)=>{
    console.log(`Your pizza is Baking and Your Order is ${size} and ${topping}`);
})

emitter.on("Order Pizza",(size)=>{
    if (size==="Regular") {
        console.log(` For Regular Pizza Fanta is Complimentary`);
    }
})





emitter.emit('Order Pizza',"Regular","Capsicum")