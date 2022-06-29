"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateQuadricEquation = void 0;
function calculateQuadricEquation(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    var x1 = 0;
    var x2 = 0;
    var discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log("The roots of quadratic equation are ".concat(x1, " and ").concat(x2));
    }
    else if (discriminant == 0) {
        x1 = x2 = -b / (2 * a);
        console.log("The roots of quadratic equation are ".concat(x1, " and ").concat(x2));
    }
    else {
        var realPart = (-b / (2 * a)).toFixed(2);
        var imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        console.log("The roots of quadratic equation are ".concat(realPart, " + ").concat(imagPart, "i and ").concat(realPart, " - ").concat(imagPart, "i"));
    }
}
exports.calculateQuadricEquation = calculateQuadricEquation;
