{

interface IUser {
    id: number;
    name: string;
    age: number;
}

const partialUser: Partial<IUser> = {};
const partialUser2: Partial<IUser> = { name: "Vic"};


const user: Readonly<IUser> ={ 
    id: 1,
    name: "Alice",
    age: 25,
}

// user.id = 2;
// user.name = "asdad";

// ===================
type Role = "admin" | "user" | "guest";

const rolePermissions: Record<Role, string[]> = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"]
}

type UserPreview = Pick<IUser, "id" | "name">;
// interface UserPreview extends Pick<IUser, "id" | "name"> {};

const preview: UserPreview = {
    id: 1,
    name: "Jane",
    // age: 33,
}


// ====================
type UserWithUotAge = Omit<IUser, "age">;

const userWithUotAge: UserWithUotAge = {
    id: 1,
    name: "Roh"
}

}