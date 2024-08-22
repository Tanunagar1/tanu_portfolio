import os
from PIL import Image


def resize_images_in_folder(folder_path, size=(100, 100)):
    """
    Resize all JPEG images in the given folder to the specified size.
    """
    for file_name in os.listdir(folder_path):
        if file_name.lower().endswith('.jpeg'):
            file_path = os.path.join(folder_path, file_name)
            with Image.open(file_path) as img:
                img = img.resize(size, Image.ANTIALIAS)
                img.save(file_path)
            print(f"Resized {file_path}")


def main():
    folder_path = 'logo'  # Specify the path to your logo folder
    target_size = (100, 100)  # Specify the desired size (width, height)

    resize_images_in_folder(folder_path, target_size)


if __name__ == "__main__":
    main()
