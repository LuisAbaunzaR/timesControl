const actions = require ("../actions");

const signup = (_, args, context, info) => {
    return actions.signup(args.data).then(
        token => {return {"message": "user created successfully", token:token};}
    ).catch(e => e);
};



module.exports = {
    signup
}