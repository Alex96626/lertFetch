
const request = {
    request : function (file, value) { 
        switch (value) {
            case undefined:
                return fetch(file)
                .then(response => response.json())
            default :
                switch (value.hasOwnProperty('id')) {
                    case true:
                        const valueOnArray = Object.values(value.id)
                        return fetch(file.toString())
                        .then((response) => { return response.json()})
                        .then((date) => {
                            return date.filter((item, index) => {
                                return valueOnArray.some((id) =>  id === index)
                        })
                    })
                }
        }

        
    }, 
    /*
    filter : function(file, field, size = []) {
        return fetch(file.toString())
        .then((response) => {
            return response.json()
        })
        .then((date) => {
            console.log(date)
            return date.filter((item, index) => {
               return size.some((i) => {return i === item[field]} )
            })
        })
    }
    */
}

console.log(request.request('user.json'))





    


