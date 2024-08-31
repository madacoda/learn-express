import UserRepository from "../repositories/UserRepository.js";

const UserContoller = {
    async index(req, res) {
        
        const result = await UserRepository.getAll();

        res.json({
            status: 'success',
            data: result,
            message: 'Success retrieve all users from db'
        });
    },

    async store(req, res) {
        const result = await UserRepository.store(req.body)

        res.json({
            status: 'success',
            data: result,
            message: 'Success add new user to db'
        });
    },

    async find(req, res) {
        const user = await UserRepository.find(req.params.id);

        res.json({
            status: 'success',
            data: user,
            message: 'Success retrieve user by id from db'
        });
    },

    async update(req, res) {
        const user = await UserRepository.update(req.params.id, req.body);

        res.json({
            status: 'success',
            data: user,
            message: 'Success update user to db'
        });
    },

    async delete(req, res) {
        const user = await UserRepository.delete(req.params.id);

        res.json({
            status: 'success',
            data: user,
            message: 'Success delete user from db'
        });
    }
};

export default UserContoller;