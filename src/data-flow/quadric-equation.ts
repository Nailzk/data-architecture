import { IQuadricEquationParams } from "./interface";

export function calculateQuadricEquation({
    a,
    b,
    c,
}: IQuadricEquationParams): void {
    let x1 = 0;
    let x2 = 0;
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        console.log(`The roots of quadratic equation are ${x1} and ${x2}`);
    } else if (discriminant == 0) {
        x1 = x2 = -b / (2 * a);

        console.log(`The roots of quadratic equation are ${x1} and ${x2}`);
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        console.log(
            `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        );
    }
}
