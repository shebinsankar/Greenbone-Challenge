# Test Cases:
Priority: HIGH
1. Test standard_user able to successfully login with valid credentials and access the inventory page
2. Test standard_user able to add products to cart and complete the full checkout process successfully
3. Test the items pricing is calculated correctly in checkout page
4. Test user session is maintained when opened in different tabs and browsers
5. Test locked_out_user is denied access with appropriate error message displayed
Priority: MEDIUM
6. Test product sorting functionality works correctly
7. Test items can be added and removed from cart and the cart counter updates accurately
8. Test checkout validation prevents user submission without required fields
Priority: LOW
9. Test users can navigate using the hamburger menu to access all items, about page, and logout
10. Test "Continue Shopping" button returns user from cart to inventory page

# Priority Reasoning: 
The first test should be, access to the app, login success and the critical flow or business effected areas of the application. So the login, full checkout, item pricing and unauthorised tests are of high priority.

Other imported features, sorting, cart counter are medium priority

Navigations check and cosmetic changes in app can be low priority

## Test Details

Test Case ID: TC_SL_004
Test Case Title: Verify user session is maintained across tabs and browsers

Objective:
Validate that an authenticated user remains logged in when the application is opened in a new tab or browser window.

Priority: High

Test Type: Manual

Preconditions:

User has valid login credentials.

User is able to log in successfully.

Test Data:

Username: standard_user

Password: secret_sauce

Test Steps:

Open the Swag Labs login page.
Log in using user details.
Confirm the inventory page is displayed.
Open the application in a new browser tab.
Verify the session state in the new tab.
Open the application in a different browser window
Verify the session state in the new browser window.

Expected Result:

The user session should remain active in the same browsing session - in tabs and new browser window.

The user should continue to have access without being unexpectedly logged out.

Actual Result:
Test Status: Not executed.
