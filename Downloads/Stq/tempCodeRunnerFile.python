# Import necessary modules
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from time import sleep

# Set up Chrome options
options = Options()
options.add_experimental_option("excludeSwitches", ["enable-logging"])

print("Testing Started")

# Initialize the Chrome driver
driver = webdriver.Chrome(options=options)

# Navigate to the website
driver.get("https://www.saucedemo.com/")
sleep(3)

# Get and print the page title
title = driver.title
print(f"Page title is {title}")

# Login process
driver.find_element(By.ID, "user-name").send_keys("standard_user")
driver.find_element(By.ID, "password").send_keys("secret_sauce")
driver.find_element(By.ID, "login-button").click()
sleep(3)

# Verify the first inventory item
first_item = driver.find_element(By.CLASS_NAME, "inventory_item")
assert first_item.is_displayed(), "First inventory item is not displayed"

# Get and print the name of the first item
first_item_name = first_item.find_element(By.CLASS_NAME, "inventory_item_name").text
print(f"First item name: {first_item_name}")

# Print test result
print("TEST PASSED: Mr. Sameer, your LOGIN is SUCCESSFUL and first inventory item is")
print("verified")

# Close the browser
driver.quit()