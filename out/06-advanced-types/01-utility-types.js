"use strict";
{
    const partialUser = {};
    const partialUser2 = { name: "Vic" };
    const user = {
        id: 1,
        name: "Alice",
        age: 25,
    };
    const rolePermissions = {
        admin: ["read", "write", "delete"],
        user: ["read", "write"],
        guest: ["read"]
    };
    // interface UserPreview extends Pick<IUser, "id" | "name"> {};
    const preview = {
        id: 1,
        name: "Jane",
        // age: 33,
    };
    const userWithUotAge = {
        id: 1,
        name: "Roh"
    };
}
