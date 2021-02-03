document.write(`1. Выведите числа от 1 до 50 и от 35 до 8.<br>`)

for (let i = 1; i <= 50; i++) {
    document.write(i + ' ');
}

document.write('<br>');

for (let i = 35; i >= 8; i--) {
    document.write(i + ' ');
}

document.write('<br><br>');


document.write(`2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.<br>`);

let i = 89;
while (i >= 11) {
    document.write(i + '<br>');
    i--;
}

document.write('<br><br>');



document.write(`3. С помощью цикла найдите сумму чисел от 0 до 100.`);

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i
}
document.write('<br>');

document.write('Сумма чисел от 0 до 100 = ' + sum);
document.write('<br><br>');


document.write(`4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6(1 + 2 + 3).`);
document.write('<br>');


for (let i = 1; i <= 5; i++) {
    let sum = 0;
    for (let x = i; x > 0; x--) {
        sum += x;
    }
    document.write(`в числе ${i} сумма составляет ${sum} <br>`)
}

document.write('<br><br>');

document.write(`5. Выведите чётные числа от 8 до 56. Решить задание через while и for.`);
document.write('<br>');

i = 8;
while (i <= 56) {
    if (i % 2 == 0) {
        document.write(i + ' ')
    };
    i++;
}

document.write('<br>');

for (let i = 8; i <= 56; i++) {
    if (i % 2 == 0) {
        document.write(i + ' ')
    };
}

document.write('<br><br>');


document.write(`6. Необходимо вывести на экран полную таблицу умножения(от 2 до 10) в виде:
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10…
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12…
Для решения задачи используйте вложенные циклы.`);
document.write('<br>');

for (let i = 1; i <= 10; i++) {
    for (let x = 1; x <= 10; x++) {
        document.write(`${i} * ${x} = ${i * x} <br>`)
    }
    document.write('<br>');

}

document.write('<br><br>');


document.write(`7. Дано число n = 1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится ? Посчитайте количество итераций, необходимых
для этого(итерация - это проход цикла), и запишите его в переменную num.`);
document.write('<br>');

let n = 1000;
let counter = 0;

for (let i = 0;; i++) {
    if (n > 50) {
        n /= 2;
    } else {
        let num = n;

        document.write('<br>');

        document.write(`количество итераций, необходимых
        для этого = ${i}<br><br>`);

        document.write('nym = ' + num + '<br>');
        break;
    };
};

document.write('<br><br>');


document.write(`8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел.Если пользователь ввел не
число, то вывести сообщение об ошибке ввода.При подсчете учесть, что пользователь
может ввести отрицательное значение.`);
document.write('<br>');

sum = 0;
let average = 0;
counter = 0

for (let i = 1;; i++) {
    let prom1 = +(prompt('Введите число', 125));

    if (isNaN(prom1)) {
        alert('Ошибка вода')
    } else if (prom1 == 0 || prom1 == '') {
        document.write(`Общая сумма = ${sum} <br>`)
        document.write(`среднее арифметическое = ${average}`)
        break;
    } else if (typeof prom1 == 'number') {
        sum += prom1;
        counter++;
        average = sum / counter;
    }
}
document.write('<br><br>');



document.write(`9. Дана строка с числами разделенными пробелами« 4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57».Найдите самое большое и самое маленькое число в строке, используя цикл.`);
document.write('<br>');

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let num = '';
let max = -Infinity;
let min = Infinity;

for (let i = 0; i < str.length; i++) {
    if (str[i + 1] == '') {
        num += str[i]
    } else {
        num = str[i - 1] + str[i]
    };
    if (max < num) {
        max = num;
    }
    if (min > num) {
        min = num;
    }
}
document.write('самое большое число в строке ' + max + '<br>');
document.write('самое маленькое число в строке ' + min + '<br>');


document.write('<br><br>');


document.write(`10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.`);
document.write('<br>');

num = 296;
str = String(num);
sum = 0;
let rev = '';

for (let i = 0; i < str.length; i++) {
    document.write(`${i} число ${str[i]} <br>`);
    sum += +str[i];
}

for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i]
}

document.write('<br>');


document.write(`число = ${num} <br>`);
document.write(`цифр в числе = ${str.length} <br>`);
document.write(`сумма = ${sum} <br>`);
document.write(`обратный порядок = ${rev}`);