import tkinter as tk
from datetime import datetime


def get_international_event(date):
    # Dictionary of pre-defined international events
    events = {
        "01-01": "New Year's Day",
        "03-08": "International Women's Day",
        "05-01": "International Workers' Day",
        "12-25": "Christmas Day",
        "07-14": "Developers Day"
    }

    # Retrieve the event for the given date if it exists in the dictionary
    return events.get(date, "")

def update_clock():
    current_time = datetime.now().strftime("%H:%M:%S")
    current_date = datetime.now().strftime("%Y-%m-%d")
    event = get_international_event(datetime.now().strftime("%m-%d"))

    time_label.config(text=current_time)
    date_label.config(text=current_date)
    event_label.config(text=event)

    clock_frame.after(1000, update_clock)  # Update every 1 second (1000 milliseconds)

root = tk.Tk()
root.title("Digital Clock")

# Set window dimensions and position
window_width = 250
window_height = 150
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()
x = int((screen_width / 2) - (window_width / 2))
y = int((screen_height / 2) - (window_height / 2))
root.geometry(f"{window_width}x{window_height}+{x}+{y}")

# Create clock frame
clock_frame = tk.Frame(root, bg="black")
clock_frame.pack(fill=tk.BOTH, expand=True)

# Create time label
time_label = tk.Label(clock_frame, text="", font=("Arial", 32), fg="white", bg="black")
time_label.pack(pady=10)

# Create date label
date_label = tk.Label(clock_frame, text="", font=("Arial", 16), fg="white", bg="black")
date_label.pack()

# Create event label
event_label = tk.Label(clock_frame, text="", font=("Arial", 12), fg="white", bg="black")
event_label.pack()

# Start clock
update_clock()

root.mainloop()

