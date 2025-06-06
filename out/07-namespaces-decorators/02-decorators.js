"use strict";
// function Logging1(constructor: Function): void{
//     console.log("Logging1", constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function Logging2(target: any, propertyKey: string | Symbol): void{
//     console.log("Logging2 [target]", target);
//     console.log("Logging2 [propertyKey]", propertyKey);
// }
// function Logging3(target: any, propertyKey: string, descriptor: PropertyDecorator): void{
//     console.log("Logging3 [target]", target);
//     console.log("Logging3 [propertyKey]", propertyKey);
//     console.log("Logging3 [descriptor]", descriptor);
// }
// @Logging1
// class MyClass {
//     @Logging2
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     // @Logging3
//     getName(): string {
//         return this.name
//     }
// }
// const myClass = new MyClass("Matt");
// ===============
// interface ComponentMetadata {
//     selector: string;
//     template: string;
// }
// type Constuctor = new (...args: any[]) => any;
// function Component(metadata: ComponentMetadata) {
//     return function<T extends Constuctor> (OriginalConstructor: T) {
//         return class extends OriginalConstructor {
//             constructor(...args: any[]) {
//                 super(...args);
//                 const element = document.querySelector(metadata.selector)
//                 if (element) {
//                     const processedTemplate = metadata.template.replace(
//                         /{{(.*?)}}/g,
//                         (_,prop) => this[prop.trim()] || ""
//                     )
//                     element.innerHTML = processedTemplate;
//                 }
//             }
//         }
//     }
// }
// @Component({
//     selector: "#app-root",
//     template: "<h2>{{title}}</h2>"
// })
// class AppComponent {
//     title = "Привет мир!";
//     constructor(){
//         console.log("AppComponent создан");
//     }
// }
// const app = new AppComponent();
{
    // ============================================================
    function CheckPermissions(role) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                if (role !== "admin") {
                    console.log(`Доступ запрещен для роли: ${role}`);
                    return;
                }
                return originalMethod.apply(this, args);
            };
            return descriptor;
        };
    }
    class SecureService {
        performSensitiveOperation() {
            console.log("Выпполнение чувствительной операции");
        }
    }
    __decorate([
        CheckPermissions("admin")
    ], SecureService.prototype, "performSensitiveOperation", null);
    const service = new SecureService();
    service.performSensitiveOperation();
}
