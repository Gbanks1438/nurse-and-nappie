class VaccinesController < ApplicationController
    def index
        render json: Vaccine.all
    end

    def show
        vaccine = Vaccine.find_by_id(params[:id])
        if vaccine
            render json: vaccine
        else
            render json: {error: "Vaccine not found"}, status: :not_found
        end
    end

    def create
        new_vaccine = Vaccine.new(vaccine_params)
        if new_vaccine.save
            session[:vaccine_id] = new_vaccine.id
            render json: new_vaccine, status: :created
        else
            render json: {errors: new_vaccine.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
            if current_vaccine
                current_vaccine.update(vaccine_params)
        render json: current_vaccine
        else
          render json: { error: "Vaccine not found" }, status: :not_found
        end
    end

    private

    def vaccine_params
        params.permit(:date, :vaccine, :abbreviation, :dose, :method, :notes)
    end
end