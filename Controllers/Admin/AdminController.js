class AdminController{
    static dashboard= async(req,res)=>{
        try {
            res.render('admin/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    static displayStudent= async(req,res)=>{
        try {
            res.render('admin/displayStudent')
        } catch (error) {
            console.log(error)
        }
    }

}

    

module.exports =AdminController