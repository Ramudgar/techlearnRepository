import unittest

class BankAccount:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount

class TestBankAccount(unittest.TestCase):
    def test_deposit(self):
        account = BankAccount()
        account.deposit(100)
        self.assertEqual(account.balance, 100)

    def test_withdraw_sufficient_funds(self):
        account = BankAccount(200)
        account.withdraw(100)
        self.assertEqual(account.balance, 100)

    def test_withdraw_insufficient_funds(self):
        account = BankAccount(50)
        account.withdraw(100)
        self.assertEqual(account.balance, 50)

if __name__ == '__main__':
    unittest.main()
