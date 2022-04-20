class MealsController < ApplicationController
    def index
        render json: Meal.all
    end

    def show
        meal = Meal.find_by_id(params[:id])
        if meal
            render json: meal
        else
            render json: {"error": "Meal not found"}, status: :not_found
        end
    end
end