
from tkinter import *
from tkinter import messagebox
import subprocess
import re


def validate_password(password):
    # Password must contain at least 8 characters,
    # at least one uppercase letter, one lowercase letter,
    # one digit, and one special character.
    pattern = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    return re.match(pattern, password)


def submit():
    name = name_entry.get()
    email = email_entry.get()
    password = password_entry.get()
    confirm_password = confirm_password_entry.get()

    if not all((name, email, password, confirm_password)):
        messagebox.showerror("Error", "All fields must be filled!")
    elif password != confirm_password:
        messagebox.showerror("Error", "Passwords do not match!")
    elif not validate_password(password):
        messagebox.showerror(
            "Error", "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, one digit, and one special character!")
    else:
        with open("user_data.txt", "a") as file:
            file.write(f"Name: {name}\n")
            file.write(f"Email: {email}\n")
            file.write(f"Password: {password}\n")
            file.write("\n")
        messagebox.showinfo("Success", "Registration successful!")
        # Launch login.py using subprocess
        subprocess.Popen(["python", "login.py"])
        root.destroy()


root = Tk()
root.title("Registration Form")

# Styling
root.configure(bg="#F8F8F8")
root.geometry("400x300")

title_label = Label(root, text="Registration Form",
                    font=("Arial", 18), bg="#F8F8F8")
title_label.pack(pady=10)

form_frame = Frame(root, bg="#F8F8F8")
form_frame.pack(pady=10)

name_label = Label(form_frame, text="Name:", font=("Arial", 12), bg="#F8F8F8")
name_label.grid(row=0, column=0, padx=5, pady=5)
name_entry = Entry(form_frame, font=("Arial", 12))
name_entry.grid(row=0, column=1, padx=5, pady=5)

email_label = Label(form_frame, text="Email:",
                    font=("Arial", 12), bg="#F8F8F8")
email_label.grid(row=1, column=0, padx=5, pady=5)
email_entry = Entry(form_frame, font=("Arial", 12))
email_entry.grid(row=1, column=1, padx=5, pady=5)

password_label = Label(form_frame, text="Password:",
                       font=("Arial", 12), bg="#F8F8F8")
password_label.grid(row=2, column=0, padx=5, pady=5)
password_entry = Entry(form_frame, show="*", font=("Arial", 12))
password_entry.grid(row=2, column=1, padx=5, pady=5)

confirm_password_label = Label(
    form_frame, text="Confirm Password:", font=("Arial", 12), bg="#F8F8F8")
confirm_password_label.grid(row=3, column=0, padx=5, pady=5)
confirm_password_entry = Entry(form_frame, show="*", font=("Arial", 12))
confirm_password_entry.grid(row=3, column=1, padx=5, pady=5)

submit_button = Button(root, text="Submit", command=submit,
                       font=("Arial", 12), bg="#4CAF50", fg="white")
submit_button.pack(pady=10)

root.mainloop()
