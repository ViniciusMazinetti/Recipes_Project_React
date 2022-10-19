

class UserController {
    static welcome = (req, res) => {
        res.json({
            message : "Bem vindo"
        })
    }
}

module.exports = UserController