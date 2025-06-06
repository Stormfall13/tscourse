{


type IsSting<T> = T extends string ? true : false;

type A = IsSting<"Hello">;
type B = IsSting<number>;

// =================
type FilterStrings<T> = T extends string ? T : never;

type MixedTypes = "a" | 1 | "b" | 2 | "c";
type OnlyString = FilterStrings<MixedTypes>;

// =====================
type ReturnTypesOf<T> = T extends (...args: any[]) => infer R ? R : never;

function getString(): string {
    return "Hello, world!"
}

function getNumber(): number {
    return 69;
}

type StringReturnType = ReturnTypesOf<typeof getString>;
type NumberReturnType = ReturnTypesOf<typeof getNumber>;






}