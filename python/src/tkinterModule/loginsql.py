from tkinter import *
import mysql.connector
from tkinter import messagebox

def login():
    email = email_entry.get()
    password = password_entry.get()

    if not all((email, password)):
        messagebox.showerror("Error", "All fields must be filled!")
    else:
        try:
            conn = mysql.connector.connect(
                host="localhost",
                user="root",
                database="techlearn"
            )
            cursor = conn.cursor()
            query = "SELECT * FROM users WHERE email = %s AND password = %s"
            values = (email, password)
            cursor.execute(query, values)
            user = cursor.fetchone()
            if user:
                messagebox.showinfo("Success", "Login successful!")
            else:
                messagebox.showerror("Error", "Invalid email or password!")
        except mysql.connector.Error as error:
            messagebox.showerror("Error", f"Failed to connect to MySQL database: {error}")
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()

root = Tk()
root.title("Login Form")
# GUI code

# Styling
root.configure(bg="#F8F8F8")
root.geometry("400x200")

title_label = Label(root, text="Login Form",
                    font=("Arial", 18), bg="#F8F8F8")
title_label.pack(pady=10)

form_frame = Frame(root, bg="#F8F8F8")
form_frame.pack(pady=10)

email_label = Label(form_frame, text="Email:",
                    font=("Arial", 12), bg="#F8F8F8")
email_label.grid(row=0, column=0, padx=5, pady=5)
email_entry = Entry(form_frame, font=("Arial", 12))
email_entry.grid(row=0, column=1, padx=5, pady=5)

password_label = Label(form_frame, text="Password:",
                       font=("Arial", 12), bg="#F8F8F8")
password_label.grid(row=1, column=0, padx=5, pady=5)
password_entry = Entry(form_frame, show="*", font=("Arial", 12))
password_entry.grid(row=1, column=1, padx=5, pady=5)

login_button = Button(root, text="Login", command=login,
                       font=("Arial", 12), bg="#4CAF50", fg="white")
login_button.pack(pady=10)

root.mainloop()
