import sys
import unittest
from os.path import abspath, dirname

# Add parent directory of test file to the module search path
sys.path.append(dirname(dirname(dirname(abspath(__file__)))))

from module.add import add


class TestAddNumbers(unittest.TestCase):
    def test_add(self):
        result = add(2, 3)
        self.assertEqual(result, 5)

if __name__ == '__main__':
    unittest.main()