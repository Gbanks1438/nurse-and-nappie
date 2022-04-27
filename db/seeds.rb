MonthlyMilestone.destroy_all
Vaccine.destroy_all
Note.destroy_all
Expulsion.destroy_all
Meal.destroy_all
Baby.destroy_all
User.destroy_all
#  !!  We Destroy_all In REVERSE ORDER

#Time.strptime('06/30/2012 00:00', '%m/%d/%Y %H:%M')  <---???

puts "🌱🌱🌱 Seeding Users…"
user1= User.create(username: 'Testing', password: 'Test123$', first_name: 'Testo', last_name: 'Testerson', email: 'noone@nowhere.com', profile_image: 'https://www.thepaleomom.com/wp-content/uploads/2017/02/Generic-Marketing-86-360x270.jpg')

puts "🌱🌱🌱 Seeding Babies…"
baby1 = Baby.create(first_name: 'Mina', last_name: 'Banks', gender: 'Female', birth_date: Time.strptime('02/17/2022 02:59 AM', '%m/%d/%y %I:%M %a'), birth_weight: '7lbs 5oz', birth_height: '17.7in', breastfed: true, profile_image: 'https://www.thepaleomom.com/wp-content/uploads/2017/02/Generic-Marketing-86-360x270.jpg')

puts "🌱🌱🌱 Seeding Meals…"
meal1 = Meal.create(time_start: Time.strptime('02/17/2022 06:00 PM', '%m/%d/%y %I:%M %p'), time_end: Time.strptime('02/17/2022 06:10 PM', '%m/%d/%y %I:%M %p'), which_breast: 'Left', vitamin_d: true, baby_id: 1)
meal2 = Meal.create(time_start: Time.strptime('02/17/2022 06:11 PM', '%m/%d/%y %I:%M %p'), time_end: Time.strptime('02/17/2022 06:21 PM', '%m/%d/%y %I:%M %p'), which_breast: 'Right', vitamin_d: false, baby_id: 1)
meal3 = Meal.create(time_start: Time.strptime('02/17/2022 08:00 PM', '%m/%d/%y %I:%M %p'), time_end: Time.strptime('02/17/2022 08:10 PM', '%m/%d/%y %I:%M %p'), which_breast: 'Left', vitamin_d: false, baby_id: 1)
meal4 = Meal.create(time_start: Time.strptime('02/17/2022 08:11 PM', '%m/%d/%y %I:%M %p'), time_end: Time.strptime('02/17/2022 08:21 PM', '%m/%d/%y %I:%M %p'), which_breast: 'Right', vitamin_d: false, baby_id: 1)

puts "🌱🌱🌱 Seeding Expulsions…"
expulsion1 = Expulsion.create(date: Time.strptime('02/17/2022 08:53 PM', '%m/%d/%y %I:%M %p'), movement_type: 'Urine', diaper_changed: true, diaper_size: 'New Born', volume: 'Medium', color: 'Yellow', consistency: 'Fluid', num_wipes_used: 1, baby_id: 1)
expulsion2 = Expulsion.create(date: Time.strptime('02/18/2022 04:38 AM', '%m/%d/%y %I:%M %a'), movement_type: 'Feces', diaper_changed: true, diaper_size: 'New Born', volume: 'Large', color: 'Mustard', consistency: 'Sticky', num_wipes_used: 4, baby_id: 1)
expulsion3 = Expulsion.create(date: Time.strptime('02/19/2022 02:17 PM', '%m/%d/%y %I:%M %p'), movement_type: 'vomit', diaper_changed: false, diaper_size: 'N/A', volume: 'Small', color: 'White', consistency: 'Viscous', num_wipes_used: 2, baby_id: 1)

puts "🌱🌱🌱 Seeding Notes…"
note1 = Note.create(date: Time.strptime('03/10/2022 02:00 PM', '%m/%d/%y %I:%M %p'), comments: 'Mina has started to produce tears when crying', baby_id: 1)
note2 = Note.create(date: Time.strptime('03/31/2022 02:00 PM', '%m/%d/%y %I:%M %p'), comments: 'Mina has started to smile', baby_id: 1)
note3 = Note.create(date: Time.strptime('04/07/2022 02:00 PM', '%m/%d/%y %I:%M %p'), comments: 'Mina has started to track movement with her eyes', baby_id: 1)
note4 = Note.create(date: Time.strptime('04/14/2022 02:00 PM', '%m/%d/%y %I:%M %p'), comments: 'Mina has started to coo and make vocalizations', baby_id: 1)

puts "🌱🌱🌱 Seeding Vaccines…"
vaccine1 = Vaccine.create(date: Time.strptime('02/17/2022 06:00 AM', '%m/%d/%y %I:%M %p'), vaccine: 'Phenylketonuria', abbreviation: 'PKU', dose: '1st', method: 'Subcutaneous Injection', notes: 'Standard newborn Heel Stick Test.', baby_id: 1)
vaccine2 = Vaccine.create(date: Time.strptime('02/17/2022 06:05 AM', '%m/%d/%y %I:%M %p'), vaccine: 'Hepatitis B', abbreviation: 'HepB', dose: '1st', method: 'Intramuscular Thigh', notes: 'Swaddled the baby and fed her with breastmilk to sooth the pain.', baby_id: 1)
vaccine3 = Vaccine.create(date: Time.strptime('04/25/2022 01:20 PM', '%m/%d/%y %I:%M %p'), vaccine: 'Hepatitis B', abbreviation: 'HepB', dose: '2nd', method: 'Intramuscular Thigh', notes: 'Swaddled the baby and fed her with breastmilk to sooth the pain.', baby_id: 1)
vaccine4 = Vaccine.create(date: Time.strptime('04/25/2022 01:25 PM', '%m/%d/%y %I:%M %p'), vaccine: 'Rotavirus', abbreviation: 'RV1', dose: '1st', method: 'Oral Administration', notes: 'Mina swallowed the solution without significant regurgitation.', baby_id: 1)
vaccine5 = Vaccine.create(date: Time.strptime('04/25/2022 01:30 PM', '%m/%d/%y %I:%M %p'), vaccine: 'Diphtheria, Tetanus, & Acellular Pertussis', abbreviation: 'DTaP', dose: '1st', method: 'Intramuscular Thigh', notes: 'Administered as Pentacel combination vaccine.', baby_id: 1)
vaccine6 = Vaccine.create(date: Time.strptime('04/25/2022 01:30 PM', '%m/%d/%y %I:%M %p'), vaccine: 'Haemophilus Influenzae Type B', abbreviation: 'Hib', dose: '1st', method: 'Intramuscular Thigh', notes: 'Administered as Pentacel combination vaccine.', baby_id: 1)
vaccine7 = Vaccine.create(date: Time.strptime('04/25/2022 01:30 PM', '%m/%d/%y %I:%M %p'), vaccine: 'Inactivated Poliovirus', abbreviation: 'IPV', dose: '1st', method: 'Intramuscular Thigh', notes: 'Administered as Pentacel combination vaccine.', baby_id: 1)
vaccine8 = Vaccine.create(date: Time.strptime('04/25/2022 01:35 PM', '%m/%d/%y %I:%M %p'), vaccine: 'Pneumococcal Conjugate', abbreviation: 'PCV13', dose: '1st', method: 'Intramuscular Thigh', notes: 'Swaddled the baby and fed her with breastmilk to sooth the pain.', baby_id: 1)

puts "🌱🌱🌱 Seeding Monthly Milestones…"
monthlymilestone1 = MonthlyMilestone.create(date: Time.strptime('03/17/2022 12:00 PM', '%m/%d/%y %I:%M %p'), weight: '8lbs 2oz', height: '19.4in', development_notes: 'Mina is below the 50th percentile for both Weight and Height', baby_id: 1)
monthlymilestone2 = MonthlyMilestone.create(date: Time.strptime('04/17/2022 12:00 PM', '%m/%d/%y %I:%M %p'), weight: '9lbs 1oz', height: '22.5in', development_notes: 'Mina is below the 50th percentile for both Weight and Height', baby_id: 1)

puts "🪴🪴🪴 Seeding Completed ✅"