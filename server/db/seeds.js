use bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Barry",
        email: "barryloveshotels@gmail.com",
        checked_in: true
    }, 
    {
        name: "Sarah",
        email: "sarahlikesholidays@gmail.com",
        checked_in: false
    }, 
    {
        name: "Frederic",
        email: "fredhaseeds@gmail.com",
        checked_in: false
    }
]);