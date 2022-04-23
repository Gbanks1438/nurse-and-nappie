Expulsion.destroy_all
Meal.destroy_all
Baby.destroy_all
User.destroy_all
#  !!  We Destroy_all In REVERSE ORDER

puts "🏕 Seeding Users…"
user1= User.create(username: "Testing", password: "Test123$", first_name: "Testo", last_name: "Testerson", email: "noone@nowhere.com")

puts "🏕 Seeding Babies…"
baby1 = Baby.create(first_name: 'Mina', last_name: 'Banks', gender: 'Female', birth_date: DateTime.strptime("04/17/2022", "%m/%d/%y"), birth_weight: '7lbs 5oz', birth_height: '17.7in', breastfed: true)
#baby2 = Baby.create(first_name: 'Zena', last_name: 'Hanks', gender: 'Male', birth_date: DateTime.strptime("03/01/2022 14:00", "%m/%d/%y %H:%M"), birth_weight: '8lbs 8oz', birth_height: '18.9in', breastfed: true)

puts "🏕 Seeding Meals…"
meal1 = Meal.create(time_start: DateTime.strptime("06:00 PM", "%I:%M %p"), time_end: DateTime.strptime("06:10 PM", "%I:%M %p"), which_breast: 'Left', baby_id: 1)
meal2 = Meal.create(time_start: DateTime.strptime("06:11 PM", "%I:%M %p"), time_end: DateTime.strptime("06:21 PM", "%I:%M %p"), which_breast: 'Right', baby_id: 1)
meal3 = Meal.create(time_start: DateTime.strptime("08:00 PM", "%I:%M %p"), time_end: DateTime.strptime("08:10 PM", "%I:%M %p"), which_breast: 'Left', baby_id: 1)
meal4 = Meal.create(time_start: DateTime.strptime("08:11 PM", "%I:%M %p"), time_end: DateTime.strptime("08:21 PM", "%I:%M %p"), which_breast: 'Right', baby_id: 1)

puts "🏕 Seeding Expulsions…"
expulsion1 = Expulsion.create(date: Date.strptime("04/20/2022", "%m/%d/%y"), time: DateTime.strptime("07:13 PM", "%I:%M %p"), movement_type: 'Urine', diaper_changed: true, diaper_size: "New Born", movement_volume: "Medium", movement_color: 'Yellow', consistency: 'Fluid', baby_id: 1)
expulsion1 = Expulsion.create(date: Date.strptime("04/21/2022", "%m/%d/%y"), time: DateTime.strptime("01:25 PM", "%I:%M %p"), movement_type: 'Feces', diaper_changed: true, diaper_size: "New Born", movement_volume: "Large", movement_color: 'Mustard', consistency: 'Loose', baby_id: 1)
expulsion1 = Expulsion.create(date: Date.strptime("04/21/2022", "%m/%d/%y"), time: DateTime.strptime("09:13 PM", "%I:%M %p"), movement_type: 'vomit', diaper_changed: false, diaper_size: "N/A", movement_volume: "Small", movement_color: 'White', consistency: 'Viscous', baby_id: 1)