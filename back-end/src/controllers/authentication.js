import { tableLogin } from "../data/tables/login"


export const authentication = (req, res) => {
    const INSERT = "INSERT TO user(user_name, user_password, email) VALUES(?, ?, ?)"
    tableLogin.query("SELECT * FROM user", (err, data) => {
        if (err) {
            res.json(`err na ${err}`)
        }
        else {
            res.json(data)
        }
    })
}