class MealsController < ApplicationController
    def index
        render json: Meal.all
    end

    def show
        meal = Meal.find_by_id(params[:id])
        if meal
            render json: meal
        else
            render json: {error: "Meal not found"}, status: :not_found
        end
    end

    def create
        new_meal = Meal.new(meal_params)
        if new_meal.save
            session[:meal_id] = new_meal.id
            render json: new_meal, status: :created
        else
            render json: {errors: new_meal.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        current_meal = Meal.find_by_id(params[:id])
            if current_meal
                current_meal.update(meal_params)
        render json: current_meal
        else
          render json: { error: "Meal not found" }, status: :not_found
        end
    end

    def destroy
        current_meal = Meal.find_by_id(params[:id])
        current_meal.destroy
        head :no_content
    end

    private

    def meal_params
        params.permit(:time_start, :time_end, :which_breast, :vitamin_d)
    end
    
end