# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_18_221050) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "babies", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.time "birth_date"
    t.integer "birth_weight"
    t.integer "birth_height"
    t.boolean "breastfed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "expulsions", force: :cascade do |t|
    t.time "date"
    t.time "time"
    t.string "movement_type"
    t.string "movement_volume"
    t.string "movement_color"
    t.string "consistency"
    t.bigint "baby_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["baby_id"], name: "index_expulsions_on_baby_id"
  end

  create_table "meals", force: :cascade do |t|
    t.time "time_start"
    t.time "time_end"
    t.string "which_breast"
    t.bigint "baby_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["baby_id"], name: "index_meals_on_baby_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "expulsions", "babies"
  add_foreign_key "meals", "babies"
end