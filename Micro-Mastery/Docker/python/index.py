print("Hello kese")

def write_names_to_file(file_name, names):
    with open(file_name, 'w') as file:
        for name in names:
            file.write(name + '\n')

def read_names_from_file(file_name):
    with open(file_name, 'r') as file:
        return file.readlines()

if __name__ == "__main__":
    student_file = 'student.txt'
    names_to_write = []

    # Asking if the user wants to enter names
    enter_names = input("Do you want to enter names? (y/n): ").strip().lower()
    if enter_names == 'y':
        while True:
            name = input("Enter a name (or type 'done' to finish): ").strip()
            if name.lower() == 'done':
                break
            names_to_write.append(name)
    
    # Write names to file if any were entered
    if names_to_write:
        write_names_to_file(student_file, names_to_write)
        print("Names have been written to the file.")
    else:
        print("No names were entered, file writing skipped.")

    # Asking if the user wants to see the names
    see_names = input("Do you want to see the names in the file? (y/n): ").strip().lower()
    if see_names == 'y':
        all_names = read_names_from_file(student_file)
        print("Names in file:")
        for i, name in enumerate(all_names, start=1):
            print(f"{i}. {name.strip()}")
