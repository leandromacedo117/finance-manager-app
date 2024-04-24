import { tableLogin } from "../data/tables/login";
export const loginValidation = (req, res) => {
    const select = "SELECT * FROM Users WHERE email = ? AND user_password= ?"
    tableLogin.query(select, [req.body.email, req.body.password], (err, data) => {
        if( err) {
            return res.json(`erro no : ${err}`);
        } else {
            return res.json(data)
        }
    })
    
}

