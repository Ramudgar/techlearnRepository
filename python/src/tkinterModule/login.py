from tkinter import *
from tkinter import messagebox


def submit_login():
    email = login_email_entry.get()
    password = login_password_entry.get()

    with open("user_data.txt", "r") as file:
        lines = file.readlines()
        found = False

        for i in range(0, len(lines), 4):
            stored_email = lines[i+1].split(":")[1].strip()
            stored_password = lines[i+2].split(":")[1].strip()

            if email == stored_email and password == stored_password:
                found = True
                break

        if found:
            messagebox.showinfo("Success", "Login successful!")
        else:
            messagebox.showerror("Error", "Invalid email or password!")

    login_email_entry.delete(0, END)
    login_password_entry.delete(0, END)


root = Tk()
root.title("Login Form")


# Login Form
login_frame = Frame(root, bg="#F8F8F8")
login_frame.pack(pady=10)

login_title_label = Label(login_frame, text="Login Form",
                          font=("Arial", 18), bg="#F8F8F8")
login_title_label.grid(row=0, columnspan=2, padx=10, pady=10)

login_email_label = Label(login_frame, text="Email:",
                          font=("Arial", 12), bg="#F8F8F8")
login_email_label.grid(row=1, column=0, padx=5, pady=5)
login_email_entry = Entry(login_frame, font=("Arial", 12))
login_email_entry.grid(row=1, column=1, padx=5, pady=5)

login_password_label = Label(
    login_frame, text="Password:", font=("Arial", 12), bg="#F8F8F8")
login_password_label.grid(row=2, column=0, padx=5, pady=5)
login_password_entry = Entry(login_frame, show="*", font=("Arial", 12))
login_password_entry.grid(row=2, column=1, padx=5, pady=5)

login_button = Button(login_frame, text="Login", command=submit_login, font=(
    "Arial", 12), bg="#4CAF50", fg="white")
login_button.grid(row=3, columnspan=2, pady=10)

root.mainloop()
