def bubble_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr

# Example usage
arr = [5, 2, 7, 1, 9, 3]
sorted_arr = bubble_sort(arr)
print("Sorted array:", sorted_arr)
