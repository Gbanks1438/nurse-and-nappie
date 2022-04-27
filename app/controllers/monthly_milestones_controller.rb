class MonthlyMilestonesController < ApplicationController
    def index
        render json: MonthlyMilestone.all
    end

    def show
        monthlymilestone = MonthlyMilestone.find_by_id(params[:id])
        if monthlymilestone
            render json: monthlymilestone
        else
            render json: {error: "Monthly Milestone not found"}, status: :not_found
        end
    end

    def create
        new_monthlymilestone = MonthlyMilestone.new(monthlymilestone_params)
        if new_monthlymilestone.save
            session[:monthlymilestone_id] = new_monthlymilestone.id
            render json: new_monthlymilestone, status: :created
        else
            render json: {errors: new_monthlymilestone.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
            if current_monthlymilestone
                current_monthlymilestone.update(monthlymilestone_params)
        render json: current_monthlymilestone
        else
          render json: { error: "Monthly Milestone not found" }, status: :not_found
        end
    end

    private

    def monthlymilestone_params
        params.permit(:date, :weight, :height, :development_notes)
    end
end