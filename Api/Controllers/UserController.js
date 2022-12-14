const User = require("../Models/User")
const {hash, genSalt, compare} = require('bcryptjs')

const jwt = require("jsonwebtoken")

class UserController {
    static welcome = (req, res) => {
        res.json({
            message : "Bem vindo"
        })
    }

    static login = async (req, res) => {
        const {email, password} = req.body
        const user = await this.findUser(email)

        if(!user) {
            res.status(422).json({
                msg : 'Usuário não encontrado'
            })
            return
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            res.status(422).json({
                msg : 'Senha Incorreta'
            })
            return
        }

        try {
            const secret = process.env.SECRET

            const token = jwt.sign({id : user._id}, secret)

            res.status(200).json({
                msg : "Autenticação realizada com sucesso",
                token
            })
        } catch (error) {
            res.status(500).json(error)
        }

    }

    static createUser = async (req, res) => {
        const {name, email, password} = req.body

        const emailVerification = await this.findUser(email)

        if(emailVerification){
            res.status(409).json({
                msg : "email já existente"
            })

            return 
        }

        const salt = await genSalt(12) 

        const passwordHash = await hash(password, salt)

        const user = new User({name, email, password : passwordHash})

        try {
            await user.save()

            res.status(201).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static findUser = async (email) => {

        try {
            const user = await User.findOne({
                email
            })
           return user

        } catch (error) {
            res.status(500).json(error)
        }
    }

    static findUserById = async (req, res) => {

        try {

            const {id} = req.params
            const user = await User.findById({
                _id : id
            })

           res.status(200).json(user)

        } catch (error) {
            res.status(500).json(error)
        }
    
    }

    static updateUser = async (req, res) => {

        const id = req.params.id

        const {name, email, password} = req.body

        const salt = await genSalt(12) 

        const passwordHash = await hash(password, salt)

        const user = {name, email, password : passwordHash}

        try {
            const updateUser = await User.updateOne({
                _id : id
            }, user)


            if(updateUser.matchedCount == 0) {
                res.status(422).json({
                    msg : 'usuário não encontrado'
                })

                return
            }

            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = UserController