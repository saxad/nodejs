

module.exports = function(request, response, next){
    
    console.log(request.session.flash)
    if(request.session.flash){
        response.locals.flash = request.session.flash
        request.session.flash = undefined
    }

    request.flash = function(type, content){
        if(request.session.flash === undefined){
            request.session.flash = {}    
        }
        request.session.flash[type] = content
       // console.log(request.session.flash) 
    }
    next()
}


// console.log(request.session.error)
// if(request.session.error){
//     response.locals.error = request.session.error;
//     request.session.error = undefined
// }