class VaccsController < ApplicationController
    def index
        # byebug
        render json: Vacc.all
        # byebug
    end

    def show
        current_vaccine = Vacc.find_by_id(params[:id])
        if current_vaccine
            render json: current_vaccine
        else
            render json: {error: "Vaccine not found"}, status: :not_found
        end
    end

    def create
        new_vaccine = Vacc.new(vaccine_params)
        if new_vaccine.save
            session[:vaccine_id] = new_vaccine.id
            render json: new_vaccine, status: :created
        else
            render json: {errors: new_vaccine.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        current_vaccine = Vacc.find_by_id(params[:id])
            if current_vaccine
                current_vaccine.update(vacc_params)
        render json: current_vaccine
        else
          render json: { error: "Vaccine not found" }, status: :not_found
        end
    end

    def destroy
        current_vaccine = Vacc.find_by_id(params[:id])
        current_vaccine.destroy
        head :no_content
    end

    private

    def vacc_params
        params.permit(:date, :vaccine, :abbreviation, :dose, :method, :notes)
    end
end