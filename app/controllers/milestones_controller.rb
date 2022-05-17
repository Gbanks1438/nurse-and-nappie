class MilestonesController < ApplicationController
    def index
        render json: Milestone.all
    end

    def show
        milestone = Milestone.find_by_id(params[:id])
        if milestone
            render json: milestone
        else
            render json: {error: "Milestone not found"}, status: :not_found
        end
    end

    def create
        new_milestone = Milestone.new(milestone_params)
        if new_milestone.save
            session[:milestone_id] = new_milestone.id
            render json: new_milestone, status: :created
        else
            render json: {errors: new_milestone.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
            if current_milestone
                current_milestone.update(milestone_params)
        render json: current_milestone
        else
          render json: { error: "Milestone not found" }, status: :not_found
        end
    end

    def destroy
        current_milestone.destroy
        head :no_content
    end

    private

    def milestone_params
        params.permit(:ms_date, :weight, :height, :development_notes)
    end
end