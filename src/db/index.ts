import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(`postgres://${}:${}@localhost.com:5432/blackboxdb`)

