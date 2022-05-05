Vaccine.destroy_all
Milestone.destroy_all
Note.destroy_all
Expulsion.destroy_all
Meal.destroy_all
Baby.destroy_all
User.destroy_all
#  !!  We Destroy_all In REVERSE ORDER

#Time.strptime('06/30/2012 00:00', '%m/%d/%Y %H:%M')  <---??? = --> ArgumentError: invalid date or strptime format - `02/17/2022 02:59' `%m/%d/%y %H:%M'
###Do I HAVE TO USE? --> DateTime.strptime("09/14/2009 7:30", "%m/%d/%Y %H:%M")

##What about this? --> Time.new(2022, 02, 17, 2, 59, 00, "-04:00") #=> 2022-02-17 02:59:00 -0400

puts "🌱🌱🌱 Seeding Users…"
user1= User.create(username: 'Testing', password: 'Test123$', usr_first_name: 'Testo', usr_last_name: 'Testerson', email: 'noone@nowhere.com', usr_profile: 'https://www.thepaleomom.com/wp-content/uploads/2017/02/Generic-Marketing-86-360x270.jpg')

puts "🌱🌱🌱 Seeding Babies…"
baby1 = Baby.create(b_first_name: 'Mina', b_last_name: 'Banks', gender: 'Female', birth_date: Time.new(2022, 02, 17, 02, 59, 00), birth_weight: '7lbs 5oz', birth_height: '17.7in', breastfed: true, baby_profile: 'https://i.pinimg.com/originals/b2/b9/8d/b2b98db865e5ebf461cde0138821f0ec.jpg', user_id: 1)

puts "🌱🌱🌱 Seeding Meals…"
meal1 = Meal.create(time_start: Time.new(2022, 02, 17, 6, 00, 00, "-04:00"), time_end: Time.new(2022, 02, 17, 6, 10, 00, "-04:00"), which_breast: 'Left', vitamin_d: true, baby_id: 1)
meal2 = Meal.create(time_start: Time.new(2022, 02, 17, 6, 11, 00, "-04:00"), time_end: Time.new(2022, 02, 17, 6, 21, 00, "-04:00"), which_breast: 'Right', vitamin_d: false, baby_id: 1)
meal3 = Meal.create(time_start: Time.new(2022, 02, 17, 8, 00, 00, "-04:00"), time_end: Time.new(2022, 02, 17, 8, 10, 00, "-04:00"), which_breast: 'Left', vitamin_d: false, baby_id: 1)
meal4 = Meal.create(time_start: Time.new(2022, 02, 17, 8, 11, 00, "-04:00"), time_end: Time.new(2022, 02, 17, 8, 21, 00, "-04:00"), which_breast: 'Right', vitamin_d: false, baby_id: 1)

puts "🌱🌱🌱 Seeding Expulsions…"
expulsion1 = Expulsion.create(exp_date: Time.new(2022, 02, 17, 8, 53, 00, "-04:00"), movement_type: 'Urine', diaper_changed: true, diaper_size: 'New Born', volume: 'Medium', color: 'Yellow', consistency: 'Fluid', num_wipes_used: 1, baby_id: 1)
expulsion2 = Expulsion.create(exp_date: Time.new(2022, 02, 18, 16, 38, 00, "-04:00"), movement_type: 'Feces', diaper_changed: true, diaper_size: 'New Born', volume: 'Large', color: 'Mustard', consistency: 'Sticky', num_wipes_used: 4, baby_id: 1)
expulsion3 = Expulsion.create(exp_date: Time.new(2022, 02, 19, 14, 17, 00, "-04:00"), movement_type: 'vomit', diaper_changed: false, diaper_size: 'N/A', volume: 'Small', color: 'White', consistency: 'Viscous', num_wipes_used: 2, baby_id: 1)

puts "🌱🌱🌱 Seeding Notes…"
note1 = Note.create(note_date: Time.new(2022, 03, 10, 14, 00, 00, "-04:00"), comments: 'Mina has started to produce tears when crying', baby_id: 1)
note2 = Note.create(note_date: Time.new(2022, 03, 31, 14, 00, 00, "-04:00"), comments: 'Mina has started to smile', baby_id: 1)
note3 = Note.create(note_date: Time.new(2022, 04, 07, 14, 00, 00, "-04:00"), comments: 'Mina has started to track movement with her eyes', baby_id: 1)
note4 = Note.create(note_date: Time.new(2022, 04, 14, 14, 00, 00, "-04:00"), comments: 'Mina has started to coo and make vocalizations', baby_id: 1)

puts "🌱🌱🌱 Seeding Milestones…"
milestone1 = Milestone.create(ms_date: Time.new(2022, 03, 17, 12, 00, 00, "-04:00"), weight: '8lbs 2oz', height: '19.4in', development_notes: 'Mina is below the 50th percentile for both Weight and Height', baby_id: 1)
milestone2 = Milestone.create(ms_date: Time.new(2022, 04, 17, 12, 00, 00, "-04:00"), weight: '9lbs 1oz', height: '22.5in', development_notes: 'Mina is below the 50th percentile for both Weight and Height', baby_id: 1)

puts "🌱🌱🌱 Seeding Vaccines…"
vaccine1 = Vaccine.create(vax_date: Time.new(2022, 02, 17, 6, 00, 00, "-04:00"), vaccine: 'Phenylketonuria', abbreviation: 'PKU', dose: '1st', method: 'Subcutaneous Injection', vax_notes: 'Standard newborn Heel Stick Test.', baby_id: 1)
vaccine2 = Vaccine.create(vax_date: Time.new(2022, 02, 17, 6, 05, 00, "-04:00"), vaccine: 'Hepatitis B', abbreviation: 'HepB', dose: '1st', method: 'Intramuscular Thigh', vax_notes: 'Swaddled the baby and fed her with breastmilk to sooth the pain.', baby_id: 1)
vaccine3 = Vaccine.create(vax_date: Time.new(2022, 04, 25, 13, 20, 00, "-04:00"), vaccine: 'Hepatitis B', abbreviation: 'HepB', dose: '2nd', method: 'Intramuscular Thigh', vax_notes: 'Swaddled the baby and fed her with breastmilk to sooth the pain.', baby_id: 1)
vaccine4 = Vaccine.create(vax_date: Time.new(2022, 04, 25, 13, 25, 00, "-04:00"), vaccine: 'Rotavirus', abbreviation: 'RV1', dose: '1st', method: 'Oral Administration', vax_notes: 'Mina swallowed the solution without significant regurgitation.', baby_id: 1)
vaccine5 = Vaccine.create(vax_date: Time.new(2022, 04, 25, 13, 30, 00, "-04:00"), vaccine: 'Diphtheria, Tetanus, & Acellular Pertussis', abbreviation: 'DTaP', dose: '1st', method: 'Intramuscular Thigh', vax_notes: 'Administered as Pentacel combination vaccine.', baby_id: 1)
vaccine6 = Vaccine.create(vax_date: Time.new(2022, 04, 25, 13, 30, 00, "-04:00"), vaccine: 'Haemophilus Influenzae Type B', abbreviation: 'Hib', dose: '1st', method: 'Intramuscular Thigh', vax_notes: 'Administered as Pentacel combination vaccine.', baby_id: 1)
vaccine7 = Vaccine.create(vax_date: Time.new(2022, 04, 25, 13, 30, 00, "-04:00"), vaccine: 'Inactivated Poliovirus', abbreviation: 'IPV', dose: '1st', method: 'Intramuscular Thigh', vax_notes: 'Administered as Pentacel combination vaccine.', baby_id: 1)
vaccine8 = Vaccine.create(vax_date: Time.new(2022, 04, 25, 13, 30, 00, "-04:00"), vaccine: 'Pneumococcal Conjugate', abbreviation: 'PCV13', dose: '1st', method: 'Intramuscular Thigh', vax_notes: 'Swaddled the baby and fed her with breastmilk to sooth the pain.', baby_id: 1)

puts "🪴🪴🪴 Seeding Completed ✅"