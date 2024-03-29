from telegram.ext import Updater, MessageHandler, Filters, CommandHandler
import os

def cat_list_value():
    if os.path.exists("categ_list.txt"):
        f = open('categ_list.txt','r')
        for line in f:
            string = line
        elements = string.split(' ')
        f.close()
        return elements
    else:
        return []

def total(update, context):
    total_dict = dict.fromkeys(cat_list_value(),0)

    fin_list = []
    f = open('costs_list.txt','r')
    for line in f:
        elements = line.split(' ')
        lst = [elements[0][1:],int(elements[1])]
        fin_list.append(lst)

    for lst in fin_list:
        total_dict[lst[0]] = total_dict[lst[0]] + lst[1]

    chat = update.effective_chat
    context.bot.send_message(chat_id=chat.id, text=str(total_dict))


def costs_list(update, context):
    f = open('costs_list.txt','r')
    string = ''
    for line in f:
        string = string + line
    f.close()
    chat = update.effective_chat
    context.bot.send_message(chat_id=chat.id, text=string)

def start(update, context):
    categ_list = ['eat','ent','coffee','transport', 'sport', 'clothers','other']
    string_out = ' '.join(categ_list)
    f = open('categ_list.txt','w')
    f.write(string_out)
    f.close()
    
    chat = update.effective_chat
    context.bot.send_message(chat_id=chat.id, text="Hello! This is own finances bot.")

def cat (update, context):
    f = open('categ_list.txt','r')
    for line in f:
        string = line
    chat = update.effective_chat
    context.bot.send_message(chat_id=chat.id, text=string)

def addcat (update, context): #/addcat tech
    string = update.message.text
    elements = string.split(' ')
    f = open('categ_list.txt','r')
    for line in f:
        categories = line
    f.close
    f = open('categ_list.txt','w')
    f.write(categories)
    f.write(' '+elements[1])
    f.close()
    chat = update.effective_chat
    context.bot.send_message(chat_id=chat.id, text="Category "+elements[1]+" added.")


def costs(update, context):

    string = update.message.text
    elements = string.split(' ')
    
    f = open('costs_list.txt','a')
    f.write(string+'\n')
    f.close()

    chat = update.effective_chat
    context.bot.send_message(chat_id=chat.id, text="Your cost is "+elements[1])

def echo(update, context):
    update.message.reply_text(update.message.text)

updater = Updater("")
dispatcher = updater.dispatcher

dispatcher.add_handler(CommandHandler("start", start))
dispatcher.add_handler(CommandHandler(cat_list_value(), costs))
dispatcher.add_handler(CommandHandler("cat", cat))
dispatcher.add_handler(CommandHandler("addcat", addcat))
dispatcher.add_handler(CommandHandler("costs", costs_list))
dispatcher.add_handler(CommandHandler("total", total))


dispatcher.add_handler(MessageHandler(Filters.all, echo))

updater.start_polling()
updater.idle()