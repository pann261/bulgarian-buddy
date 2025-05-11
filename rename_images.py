import os

directory = "./images"
for filename in os.listdir(directory):
    if filename.startswith("images_"):
        new_name = filename.replace("images_", "", 1)
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_name)
        os.rename(old_path, new_path)
        print(f'Renamed: {filename} -> {new_name}')