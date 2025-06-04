// Enums (перечисления)

// 1. Числовые перечисления
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const move: Direction = Direction.Up;
console.log(move);


// 2. Строковые перечисления
enum Color {
    Red = 'RED',
    Green = "GREEN",
    Blue = "BLUE"
}

const favoriteColor = Color.Blue;
console.log(favoriteColor);

// 3. Пользовательские значения
enum ResponseCode {
    Ok = 200,
    NotFound = 404,
    ServerError = 500,
}

const responseCode: ResponseCode = ResponseCode.Ok;
console.log(responseCode);


// 4. Смешанные типы
enum MixedEnum {
    No = 0,
    Yes = "YES",
}

console.log(Direction[0]);
console.log(Direction[Direction.Up]);

// 5.Ошибки
const wrongDirection: Direction = 3;
const wronColor: Color = "Purple"