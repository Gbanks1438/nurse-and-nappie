Note.destroy_all
Expulsion.destroy_all
Meal.destroy_all
Baby.destroy_all
User.destroy_all
#  !!  We Destroy_all In REVERSE ORDER

puts "🌱🌱🌱 Seeding Users…"
user1= User.create(username: 'Testing', password: 'Test123$', first_name: 'Testo', last_name: 'Testerson', email: 'noone@nowhere.com', profile_image: 'https://www.thepaleomom.com/wp-content/uploads/2017/02/Generic-Marketing-86-360x270.jpg')

puts "🌱🌱🌱 Seeding Babies…"
baby1 = Baby.create(first_name: 'Oliver', last_name: 'Banks', gender: 'Male', birth_date: Time.strptime("12/01/2021 12:30 PM", "%m/%d/%y %I:%M %p"), birth_weight: '8lbs 8oz', birth_height: '18.9in', breastfed: true, profile_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOE_-5YuxnZvF-ka516tnCmPMnHG3pRpsUQ&usqp=CAU')
baby2 = Baby.create(first_name: 'Mina', last_name: 'Banks', gender: 'Female', birth_date: Time.strptime("04/17/2022 02:59 AM", "%m/%d/%y %I:%M %a"), birth_weight: '7lbs 5oz', birth_height: '17.7in', breastfed: true, profile_image: 'https://www.thepaleomom.com/wp-content/uploads/2017/02/Generic-Marketing-86-360x270.jpg')

puts "🌱🌱🌱 Seeding Meals…"
meal1 = Meal.create(time_start: Time.strptime("04/17/2022 06:00 PM", "%m/%d/%y %I:%M %p"), time_end: Time.strptime("04/17/2022 06:10 PM", "%m/%d/%y %I:%M %p"), which_breast: 'Left', vitamin_d: true, baby_id: 2)
meal2 = Meal.create(time_start: Time.strptime("04/17/2022 06:11 PM", "%m/%d/%y %I:%M %p"), time_end: Time.strptime("04/17/2022 06:21 PM", "%m/%d/%y %I:%M %p"), which_breast: 'Right', vitamin_d: false, baby_id: 2)
meal3 = Meal.create(time_start: Time.strptime("04/17/2022 08:00 PM", "%m/%d/%y %I:%M %p"), time_end: Time.strptime("04/17/2022 08:10 PM", "%m/%d/%y %I:%M %p"), which_breast: 'Left', vitamin_d: false, baby_id: 2)
meal4 = Meal.create(time_start: Time.strptime("04/17/2022 08:11 PM", "%m/%d/%y %I:%M %p"), time_end: Time.strptime("04/17/2022 08:21 PM", "%m/%d/%y %I:%M %p"), which_breast: 'Right', vitamin_d: false, baby_id: 2)

puts "🌱🌱🌱 Seeding Expulsions…"
expulsion1 = Expulsion.create(date: Time.strptime("04/17/2022 08:53 PM", "%m/%d/%y %I:%M %p"), movement_type: 'Urine', diaper_changed: true, diaper_size: "New Born", volume: "Medium", color: 'Yellow', consistency: 'Fluid', num_wipes_used: 1, baby_id: 2)
expulsion2 = Expulsion.create(date: Time.strptime("04/18/2022 04:38 AM", "%m/%d/%y %I:%M %a"), movement_type: 'Feces', diaper_changed: true, diaper_size: "New Born", volume: "Large", color: 'Mustard', consistency: 'Loose', num_wipes_used: 4, baby_id: 2)
expulsion3 = Expulsion.create(date: Time.strptime("04/19/2022 02:17 PM", "%m/%d/%y %I:%M %p"), movement_type: 'vomit', diaper_changed: false, diaper_size: "N/A", volume: "Small", color: 'White', consistency: 'Viscous', num_wipes_used: 2, baby_id: 2)

puts "🌱🌱🌱 Seeding Notes…"
note1 = Note.create(date: Time.strptime("04/17/2022 10:00 PM", "%m/%d/%y %I:%M %p"), comments: 'Example comment about the Baby', baby_id: 2)

puts "🪴🪴🪴 Seeding Completed ✅"