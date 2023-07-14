import unittest

class BankAccount:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount

class ATM:
    def __init__(self, bank_account):
        self.bank_account = bank_account

    def withdraw_money(self, amount):
        self.bank_account.withdraw(amount)

class TestATM(unittest.TestCase):
    def test_withdraw_money(self):
        account = BankAccount(200)
        atm = ATM(account)
        atm.withdraw_money(100)
        self.assertEqual(account.balance, 100)

if __name__ == '__main__':
    unittest.main()
