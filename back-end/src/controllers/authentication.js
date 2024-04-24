import {tableLogin} from '../data/tables/login.js'

export const authentication = (req, res) => {
    const INSERT = "INSERT INTO Users(user_name, user_password, email) VALUES (?, ?, ?)";
    const  select = "SELECT * FROM Users"
    tableLogin.query(INSERT, [req.body.name, req.body.password, req.body.email], (err, data) => {
        if (err) {
            console.error('Erro ao inserir novo usuário:', err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        if (data.affectedRows > 0) {
            return res.json('Dados enviados com sucesso!');
        } else {
            return res.json('Falha ao inserir novo usuário');
        }
    });
};
