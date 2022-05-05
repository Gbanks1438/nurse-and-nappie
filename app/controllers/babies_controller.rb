class BabiesController < ApplicationController
    def index
        render json: Baby.all
    end

    def show
        baby = Baby.find_by_id(params[:id])
        if baby
            render json: baby
        else
            render json: {error: "Baby not found"}, status: :not_found
        end
    end

    def create
        new_baby = Baby.new(baby_params)
        if new_baby.save
            session[:baby_id] = new_baby.id
            render json: new_baby, status: :created
        else
            render json: {errors: new_baby.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
            if current_baby
                current_baby.update(baby_params)
        render json: current_baby
        else
          render json: { error: "Baby not found" }, status: :not_found
        end
    end

    private

    def baby_params
        params.permit(:b_first_name, :b_last_name, :gender, :birth_date, :birth_weight, :birth_height, :breastfed, :baby_profile)
    end
end