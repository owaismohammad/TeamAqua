from turtle import Turtle, Screen
import random
screen=Screen()


def game():
    screen.setup(width=1000,height=700)
    screen.bgcolor("cornflower blue")
    screen.bgpic('Turtle Race Game\ywave.gif')
    heading1=Turtle()
    heading1.penup()
    heading1.goto(-470,250)
    heading1.pendown()
    heading1.color("midnight blue")
    style = ('Bauhaus 93', 30, 'bold')
    heading1.write('Turtle\nRace',font=style,align='left')
    heading1.hideturtle() 

    heading2=Turtle()
    heading2.penup()
    heading2.goto(-470,230)
    heading2.pendown()
    heading2.color("white")
    style = ('Bauhaus 93', 0, 'bold')
    heading2.write('PICK THE COLOUR AND WIN THE RACE',font=style,align='left')
    heading2.hideturtle()    

    heading3=Turtle()
    heading3.penup()
    heading3.goto(-20,230)
    heading3.pendown()
    heading3.color("midnight blue")
    style = ('Bodoni MT Black', 20,)
    heading3.write("Amidst the thrill of the turtle race,\nwhispers of preservation linger,\nurging us to protect their sanctuary.",font=style,align='left')
    heading3.hideturtle()



    
    color=['red','orange','green','blue','black','yellow','pink']
    y_positions=[-320,-240,-160,-80,0,80,160]
    x=0
    name=["red","orange","green","blue","violet","yellow","pink"]
    text=["red","orange","green","blue","violet","yellow","pink"]
    jumps=[1,2,3,4,5,6,7,8,9,10]
    style = ('Bauhaus 93', 12, 'bold')

    for r in range(0,7):
        heading3=Turtle()
        heading3.hideturtle()
        heading3.penup()
        heading3.goto(-470,y_positions[r]+40)
        heading3.pendown()
        heading3.color(color[r])
        heading3.write("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        
    heading4=Turtle()
    heading4.penup()
    heading4.goto(450,-350)
    heading4.pendown()
    heading4.color("black")
    heading4.write("\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|")
    heading4.hideturtle()



    for r in range(0,7):
        
        name[r]=Turtle()
        name[r].shapesize(2)
        name[r].shape("turtle")
        name[r].color(color[r])
        name[r].penup()
        text[r]=Turtle()
        text[r].penup()
        text[r].color(color[r])
        text[r].goto(-470,y_positions[r]+20)
        text[r].pendown()
        style = ('Bauhaus 93', 15, 'bold')
        text[r].write(color[r],font=style,align='left')
        text[r].hideturtle()
        name[r].goto(x=-470,y=y_positions[r])
        


    heading2k=Turtle()
    heading2k.penup()
    heading2k.goto(390,205)
    heading2k.pendown()
    heading2k.color("white")
    style = ('Outfit', 0, 'bold')
    heading2k.write('FINISH',font=style,align='left')
    heading2k.hideturtle()  
    
    user_bet=screen.textinput(title="Make Your Bet", prompt="Choose A Turtle you would want to win the Race!")
    flag=0
    while x!=500:
        for r in range(0,7):
            
            if name[r].xcor()>= 430:
                flag=r
                x=500
                break
            else:
                name[r].forward(jumps[random.randint(0,9)])
    print(name[r])
    if user_bet==name[flag]:
        gameover=screen.textinput(title="Turtle Race", prompt="Yay!! You Win\nDo you wish to Play Again(Y/N)?")
        
    else:
        gameover=screen.textinput(title="Turtle Race", prompt=f"'You Lose'\nThe Race is Won by{name[flag]}.\nDo you wish to Play Again(Y/N)?")
    if gameover.lower()=='y':
        return True
    elif gameover.lower()=='n':
        return False

f=game()
if f==True:
    screen.clear()
    game()
else:
    message=screen.textinput(title="Turtle Race", prompt="Press 'Y' to exit")


    
screen.exitonclick()    