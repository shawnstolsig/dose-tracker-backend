const { DataSource } = require('apollo-datasource');
const isEmail = require('isemail');

class UserAPI extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    /**
     * This is a function that gets called by ApolloServer when being setup.
     * This function gets called with the datasource config including things
     * like caches and context. We'll assign this.context to the request context
     * here, so we can know about the user making requests
     */
    initialize(config) {
        this.context = config.context;
    }

    async findOrCreateUser({ username: usernameArg } = {}) {
        const email = this?.context?.user ? this.context.user.username : usernameArg;
        if (!email || !isEmail.validate(email)) return null;

        const users = await this.store.users.findOrCreate({ where: { email } });
        return users && users[0] ? users[0] : null;
    }



}

module.exports = UserAPI;
