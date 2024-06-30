function parseCount(value) {
	let parseResult = Number.parseFloat(value);
	if (Number.isNaN(parseResult)) {
		throw new Error('Невалидное значение');
	}
	return parseResult;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;

	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let p = (this.a + this.b + this.c) / 2;
		return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		let triangle = new Triangle(a, b, c);
		return triangle;
	} catch (error) {
		let triangleError = {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
		return triangleError;
	}
}