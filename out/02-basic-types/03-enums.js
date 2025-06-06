"use strict";
// Enums (перечисления)
// 1. Числовые перечисления
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const move = Direction.Up;
console.log(move);
// 2. Строковые перечисления
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
const favoriteColor = Color.Blue;
console.log(favoriteColor);
// 3. Пользовательские значения
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["Ok"] = 200] = "Ok";
    ResponseCode[ResponseCode["NotFound"] = 404] = "NotFound";
    ResponseCode[ResponseCode["ServerError"] = 500] = "ServerError";
})(ResponseCode || (ResponseCode = {}));
const responseCode = ResponseCode.Ok;
console.log(responseCode);
// 4. Смешанные типы
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["No"] = 0] = "No";
    MixedEnum["Yes"] = "YES";
})(MixedEnum || (MixedEnum = {}));
console.log(Direction[0]);
console.log(Direction[Direction.Up]);
// 5.Ошибки
const wrongDirection = 3;
const wronColor = "Purple";
