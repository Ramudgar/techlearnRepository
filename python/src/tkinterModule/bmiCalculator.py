import tkinter as tk
from tkinter import messagebox


def calculate_bmi():
    try:
        height_feet = float(height_feet_entry.get())
        weight = float(weight_entry.get())
        age = int(age_entry.get())

        # Convert height from feet to centimeters
        height_cm = height_feet * 30.48

        # Calculate BMI
        bmi = weight / ((height_cm / 100) ** 2)

        # Display result
        result_label.config(text=f"Your BMI: {bmi:.2f}", fg="#2E8B57")
        category = get_bmi_category(bmi)
        category_label.config(text=f"Category: {category}", fg="#2E8B57")
    except ValueError:
        messagebox.showerror("Error", "Please enter valid values for height, weight, and age.")

def get_bmi_category(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal weight"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"

root = tk.Tk()
root.title("BMI Calculator")

# Set window dimensions and position
window_width = 400
window_height = 300
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()
x = int((screen_width / 2) - (window_width / 2))
y = int((screen_height / 2) - (window_height / 2))
root.geometry(f"{window_width}x{window_height}+{x}+{y}")

# Set window background color
root.configure(bg="#F5F5F5")

# Set font styles
label_font = ("Arial", 12)
entry_font = ("Arial", 12)
button_font = ("Arial", 12, "bold")

# Create labels
height_label = tk.Label(root, text="Height (feet):", font=label_font, bg="#F5F5F5")
weight_label = tk.Label(root, text="Weight (kg):", font=label_font, bg="#F5F5F5")
age_label = tk.Label(root, text="Age:", font=label_font, bg="#F5F5F5")
result_label = tk.Label(root, text="", font=label_font, bg="#F5F5F5")
category_label = tk.Label(root, text="", font=label_font, bg="#F5F5F5")

# Create entry fields
height_feet_entry = tk.Entry(root, font=entry_font)
weight_entry = tk.Entry(root, font=entry_font)
age_entry = tk.Entry(root, font=entry_font)

# Create submit button
submit_button = tk.Button(root, text="Calculate BMI", command=calculate_bmi, font=button_font, bg="#4CAF50", fg="white")

# Set widget positions using grid layout
height_label.grid(row=0, column=0, padx=10, pady=5, sticky="e")
height_feet_entry.grid(row=0, column=1, padx=10, pady=5)
weight_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")
weight_entry.grid(row=1, column=1, padx=10, pady=5)
age_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")
age_entry.grid(row=2, column=1, padx=10, pady=5)
submit_button.grid(row=3, column=0, columnspan=2, padx=10, pady=10)
result_label.grid(row=4, column=0, columnspan=2, padx=10, pady=5)
category_label.grid(row=5, column=0, columnspan=2, padx=10, pady=5)

root.mainloop()
