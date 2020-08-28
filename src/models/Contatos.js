import { Model, DataTypes } from 'sequelize';

class Contatos extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize:connection,
        })
    }

}


export default Contatos;