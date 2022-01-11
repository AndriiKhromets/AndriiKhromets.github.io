from telegram.ext import Updater, MessageHandler, Filters, CommandHandler

def sum(a, b):
    return a + b

def subtract(a, b):
    return a - b

def mul(a, b):
    return a * b

def power(a, b):
    return a ** b

def divide(a, b):
    error_message = 'divide by 0'

    if b == 0:
        return error_message
    else:
        return a / b


def check_operation(operation):
    return operation in ['+', '*', '**', '-', '/']


def suma(operand_a, operand_b, operation):
    result = None
    if operation == '+':
        result = sum(operand_a, operand_b)
    elif operation == '-':
        result = subtract(operand_a, operand_b)
    elif operation == '*':
        result = mul(operand_a, operand_b)
    elif operation == '**':
        result = power(operand_a, operand_b)
    else:
        result = divide(operand_a, operand_b)

        print(operand_a, operation, operand_b, '=', result)

a, user_input_operation, b = input('Enter: ').split()

if not check_operation(user_input_operation):
    print(f'О \'{user_input_operation}\' not supported yet')
else:
    suma(int(a), int(b), user_input_operation)


def start(update, context):
    chat = update.effective_chat
    context.bot.send_message(chat_id=chat.id, text="Hello! This calculator.")

def costs(update, context):

    string = update.message.text
    elements = string.split(' ')
    
    chat = update.effective_chat
    context.bot.send_message(chat_id=chat.id, text="Your cost is "+elements[1])

updater = Updater("")
dispatcher = updater.dispatcher

dispatcher.add_handler(CommandHandler("start", start))
dispatcher.add_handler(CommandHandler("eat", costs))