function callThis(){
    console.log(this)
}

callThis()

const callThat = {
    val: function(){
        console.log(this)// reffers to the current obj
    },
    greet: function(){
        // console.log(this) reffers to the current obj
        function callThat(){
            console.log(this)
        }
        callThat()
    }
}

console.log(callThat.val())
console.log(callThat.greet())