import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Contatos from '../models/Contatos';

const connection = new Sequelize(dbConfig);

Contatos.init(connection);

export default connection;