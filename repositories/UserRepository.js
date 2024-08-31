import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

const UserRepository = {
    async getAll() {
        // get : array of object
        return await Prisma.user.findMany();
    },

    async store(data) {
        return await Prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        })
    },

    async find(id) {
        // find : object
        return await Prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    },

    async findByEmail(email) {
        return await Prisma.user.findUnique({
            where: {
                email: email
            }
        });
    },

    async update(id, data) {
        return await Prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });
    },

    async delete(id) {
        return await Prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        });
    },

};

export default UserRepository;