import { tableLogin } from "../data/tables/login"

export const authentication = (req, res) => {
    const INSERT = "INSERT INTO users(user_name, user_password, email) VALUES(?, ?, ?)";
    tableLogin.query(INSERT,[req.body.name, req.body.password, req.body.email], (err, data) => {
        if (err) {
            console.log(`erro em : ${err}`)
            res.json(`err na ${err}`)
        }
        if (data.affectedRows > 0) return res.json('send data!!')
        else {
            return res.json('falhed')
    }
    })
}