const { DataSource } = require('apollo-datasource');
const isEmail = require('isemail');

class UserAPI extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    initialize(config) {
        this.context = config.context;
    }

    async getUser({ userId } = {}){
        return await this.store.User.findByPk(userId, {
            include: [
                { model: this.store.Substance, as: 'substances' },
                { model: this.store.Dose, as: 'doses' }
            ]
        })
    }

    async getUsers(){
        return await this.store.User.findAll()
    }

    async getSubstances({ userId } = {}){
        if(userId){
            return await this.store.Substance.findAll( {
                where: { userId },
            })
        }
        return await this.store.Substance.findAll({
            where: { userId: null }
        })
    }

    async getDoses({ userId } = {}){
        if(userId){
            return await this.store.Dose.findAll( {
                where: { userId },
                include: [
                    { model: this.store.User, as: 'user' },
                    { model: this.store.Substance, as: 'substance' }
                ]
            })
        }
        return await this.store.Dose.findAll({
            include: [
                { model: this.store.Substance, as: 'substance' }
            ]
        })
    }
}

module.exports = UserAPI;
