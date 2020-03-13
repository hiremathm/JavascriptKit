class HashTagGenerator{
    constructor(data){
        this.str = data.str
    }

    generateHashTag(){
        let words = this.str.split(" ")
        let hashTag = ""
        words.forEach(function(str){
            hashTag += str[0].toUpperCase() + str.slice(1)
        })
        return "#" + hashTag
    }
}

const p = new HashTagGenerator({str: "this is my house"})

console.log(p.generateHashTag())