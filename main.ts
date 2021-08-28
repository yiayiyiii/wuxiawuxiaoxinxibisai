function 判断树 (数字: number) {
    if (数字 == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 2) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 3) {
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 4) {
        basic.showLeds(`
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 5) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 6) {
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 7) {
        basic.showLeds(`
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 8) {
        basic.showLeds(`
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (检测1 == 9) {
        basic.showLeds(`
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 10) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 11) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 12) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 13) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 14) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 15) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    if (数字 == 16) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            `)
    }
    if (数字 == 17) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            `)
    }
    if (数字 == 18) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # . .
            . . . . .
            `)
    }
    if (数字 == 19) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            . . . . .
            `)
    }
    if (数字 == 20) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    }
    if (检测1 == 21) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # . . . .
            `)
    }
    if (数字 == 22) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # . . .
            `)
    }
    if (数字 == 23) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # . .
            `)
    }
    if (数字 == 24) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
    }
    if (数字 == 25) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
}
let j = 0
let list2: number[] = []
let i = 0
let 检测1 = 0
检测1 = 0
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        检测1 += 1
        检测1 = 检测1 % 26
        判断树(检测1)
    }
    if (input.buttonIsPressed(Button.B)) {
        i += 1
        list2.push(检测1)
        检测1 = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        j = i
        for (let index = 0; index < i; index++) {
            判断树(list2.shift())
            j += -1
        }
        list2 = []
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
