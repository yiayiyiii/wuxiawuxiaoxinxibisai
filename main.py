def 判断树(数字: number):
    if 数字 == 1:
        basic.show_leds("""
            # . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 2:
        basic.show_leds("""
            # # . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 3:
        basic.show_leds("""
            # # # . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 4:
        basic.show_leds("""
            # # # # .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 5:
        basic.show_leds("""
            # # # # #
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 6:
        basic.show_leds("""
            # # # # #
                        # . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 7:
        basic.show_leds("""
            # # # # #
                        # # . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 8:
        basic.show_leds("""
            # # # # #
                        # # # . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 检测1 == 9:
        basic.show_leds("""
            # # # # #
                        # # # # .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 10:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 11:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # . . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 12:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # . . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 13:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # . .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 14:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # .
                        . . . . .
                        . . . . .
        """)
    if 数字 == 15:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        . . . . .
                        . . . . .
        """)
    if 数字 == 16:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # . . . .
                        . . . . .
        """)
    if 数字 == 17:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # . . .
                        . . . . .
        """)
    if 数字 == 18:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # . .
                        . . . . .
        """)
    if 数字 == 19:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # .
                        . . . . .
        """)
    if 数字 == 20:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        . . . . .
        """)
    if 检测1 == 21:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # . . . .
        """)
    if 数字 == 22:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # . . .
        """)
    if 数字 == 23:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # . .
        """)
    if 数字 == 24:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # .
        """)
    if 数字 == 25:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
j = 0
检测1 = 0
i = 0
list2: List[number] = []
检测1 = 0
while True:
    if input.button_is_pressed(Button.A):
        检测1 += 1
        检测1 = 检测1 % 26
        判断树(检测1)
    if input.button_is_pressed(Button.B):
        i += 1
        list2.append(检测1)
        检测1 = 0
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if input.pin_is_pressed(TouchPin.P0):
        j = i
        for index in range(i):
            判断树(list2.shift())
            j += -1
        list2 = []
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)