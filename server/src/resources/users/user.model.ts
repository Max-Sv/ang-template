class User {
    public id: number;
    public name: string;
    constructor({ id = 1, name = 'user' } = {}) {
        this.id = id;
        this.name = name;
    }
}

export = User;