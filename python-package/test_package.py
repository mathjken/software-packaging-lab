from src.packaging_demo import get_message


def test_get_message():
    assert get_message() == "Python Packaging Demo is working!"


if __name__ == "__main__":
    test_get_message()
    print("Python package test passed")
