// description - an income and expenses trackig app that helps users to keep track of their finances. this will help users organize their expenses on  a daily, monthly or fixed basis. 
// this app is capable of then generating a detailed breakdown of the user's expenses and income with feedback on how to improve their financial status.
// this app is built with react native and redux.
// this app is built by a team of developers at budget-pal
//screens structure is as follows:
// 1. dashboard screen - it has the logo and name of the app, then a small hamburger menu icon that opens the drawer navigation, 
// below that it says Hello user(with the users name) and it has a box to enter a prompt to talk with the inbuilt ai assistant that will help user regarding the app and also give feedback on expenses depending on the users needd.. it will give a detailed explanation in text and it will also rendere the results in a small graph
//there are tabs to select diffent funcionalities like - to go to the income and expenses screen, the goals screen, activity screen
// 2. income and expenses screen - this screen has a tab navigator with two tabs - income and expenses.
// the income tab has a form to enter the income details and the expenses tab has a form to enter the expenses details. here income and  expenses can be entered and set already depeneding on whether they are fixed recurring income or expenses or whether one time. 
//in additon here we can already set the details of our bank accounts as well , like we initially give it our bank account name, account number and balance with the interest and loans we have taken with their interest values and installments etc. as well. this will inturn be used to get an idea of our total savings and liabilities and recurring expenses and income from bank accouts
//so here to enter the bank related income and expenses its better to have  a seperate tab compared to other sundry income and expenses. 
// 3. goals screen - this screen has a form to enter the goals that the user wants to achieve in a certain time frame. the goals can be of different types like - buying a car, house, saving for a vacation, saving for retirement etc. this can include both short term and long term goals with the abillity to enter what sort of a fiancial plan we want to follow to achieve the goals. for example like when buying a car we can enter details of the loan / leasing  scheme we want to follow and the interest rates and installments we want to pay etc.in addition to the basic details of our goal.
// 4. activity screen - this screen has a list of all the activities that the user has done on the app. this includes all the income and expenses entered, the goals set and the feedback given by the ai assistant. this will help the user to keep track of all the activities done on the app and also to keep track of the feedback given by the ai assistant. in this screen the user will be able to also get different graphical representations of this analysis.
// 5. drawer navigation - this is a side drawer that opens when the hamburger menu icon is clicked on the dashboard screen. this drawer has links to the dashboard screen, income and expenses screen, goals screen and activity screen. this drawer also has a logout button to logout of the app. and the settings page
//6. settings page - this page has the settings of the app like - changing the user name, changing the password, changing the currency, changing the language etc. this page also has a delete account button to delete the account and all the data associated with it. more importantly we can customise the notificaions we need to receive. like if i want to be notified every day at 8pm to enter my todays expenses and income i can set that here. 
//also this will help me cutomize other notifications like feedback on my expenses and income, reminders for my goals etc.

//Defining the color pallete
export default {
    pink: "#FCA5B5",
    purple: "#D67BFF",
    primary: "#fc5c65",
    secondary: "#4ecdc4",
    black: "#000",
    white: "#fff",
    medium: "#6e6969",
    light: "#f8f4f4",
    danger: "#ff5252",
    dark: "#0c0c0c",
    beige: "#FFCA64",
    mint: "#45FFCA",
}