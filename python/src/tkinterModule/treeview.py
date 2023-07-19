import tkinter as tk
from tkinter import ttk
import mysql.connector

# Create a database connection
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    database="techlearn"
)
c = conn.cursor()

# Create the table if it doesn't exist
c.execute('''CREATE TABLE IF NOT EXISTS products
             (id INT AUTO_INCREMENT PRIMARY KEY,
             name VARCHAR(255),
             price FLOAT)''')

def insert_data():
    # Get the input values from the Entry boxes
    product_name = name_entry.get()
    product_price = float(price_entry.get())

    # Insert the data into the database
    sql = "INSERT INTO products (name, price) VALUES (%s, %s)"
    values = (product_name, product_price)
    c.execute(sql, values)
    conn.commit()

def show_data():
    # Clear the Treeview
    treeview.delete(*treeview.get_children())

    # Retrieve data from the database
    c.execute("SELECT * FROM products")
    rows = c.fetchall()

    # Display data in the Treeview
    for row in rows:
        treeview.insert('', 'end', values=row[1:])

# Create the main window
root = tk.Tk()
root.title("Product Form")

# Create the form labels and Entry boxes
name_label = tk.Label(root, text="Product Name:")
name_label.pack()
name_entry = tk.Entry(root)
name_entry.pack()

price_label = tk.Label(root, text="Product Price:")
price_label.pack()
price_entry = tk.Entry(root)
price_entry.pack()

# Create the Submit button
submit_button = tk.Button(root, text="Submit", command=insert_data)
submit_button.pack()

# Create the Treeview to display data
treeview = ttk.Treeview(root, columns=('Name', 'Price'), show='headings')
treeview.heading('Name', text='Product Name')
treeview.heading('Price', text='Product Price')
treeview.pack()

# Create the Show Data button
show_button = tk.Button(root, text="Show Data", command=show_data)
show_button.pack()

root.mainloop()
