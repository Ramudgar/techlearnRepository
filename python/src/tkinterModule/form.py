
import tkinter as tk
from tkinter import messagebox


def submit_button_clicked():
    name = name_entry.get()
    email = email_entry.get()
    password = password_entry.get()
    confirm_password = confirm_password_entry.get()

    if not name or not email or not password or not confirm_password:
        messagebox.showerror("Error", "Please fill in all fields")
        return

    if password != confirm_password:
        messagebox.showerror("Error", "Passwords do not match")
        return

    messagebox.showinfo("Success", f"Your name is {name}, your email is {email}. Thanks for registering!")

root = tk.Tk()
root.title("Registration Form")

# Set window dimensions and position
window_width = 400
window_height = 300
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()
x = int((screen_width / 2) - (window_width / 2))
y = int((screen_height / 2) - (window_height / 2))
root.geometry(f"{window_width}x{window_height}+{x}+{y}")

# Set window background color
root.configure(bg="#F0F0F0")

# Set font styles
label_font = ("Arial", 12)
entry_font = ("Arial", 12)
button_font = ("Arial", 12, "bold")

# Create labels
name_label = tk.Label(root, text="Name:", font=label_font, bg="#F0F0F0")
email_label = tk.Label(root, text="Email:", font=label_font, bg="#F0F0F0")
password_label = tk.Label(root, text="Password:", font=label_font, bg="#F0F0F0")
confirm_password_label = tk.Label(root, text="Confirm Password:", font=label_font, bg="#F0F0F0")

# Create entry fields
name_entry = tk.Entry(root, font=entry_font)
email_entry = tk.Entry(root, font=entry_font)
password_entry = tk.Entry(root, show="*", font=entry_font)
confirm_password_entry = tk.Entry(root, show="*", font=entry_font)

# Create submit button
submit_button = tk.Button(root, text="Submit", command=submit_button_clicked, font=button_font, bg="#4CAF50", fg="white")

# Set widget positions using grid layout
name_label.grid(row=0, column=0, padx=10, pady=10, sticky="e")
name_entry.grid(row=0, column=1, padx=10, pady=10)
email_label.grid(row=1, column=0, padx=10, pady=10, sticky="e")
email_entry.grid(row=1, column=1, padx=10, pady=10)
password_label.grid(row=2, column=0, padx=10, pady=10, sticky="e")
password_entry.grid(row=2, column=1, padx=10, pady=10)
confirm_password_label.grid(row=3, column=0, padx=10, pady=10, sticky="e")
confirm_password_entry.grid(row=3, column=1, padx=10, pady=10)
submit_button.grid(row=4, column=0, columnspan=2, padx=10, pady=10)

root.mainloop()
