class ExpulsionsController < ApplicationController
    def index
        render json: Expulsion.all
    end

    def show
        expulsion = Expulsion.find_by_id(params[:id])
        if expulsion
            render json: expulsion
        else
            render json: {"error": "Expulsion not found"}, status: :not_found
        end
    end

    def create
        new_expulsion = Expulsion.new(expulsion_params)
        if new_expulsion.save
            session[:expulsion_id] = new_expulsion.id
            render json: new_expulsion, status: :created
        else
            render json: {errors: new_expulsion.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
            if current_expulsion
                current_expulsion.update(expulsion_params)
        render json: current_expulsion
        else
          render json: { error: "Expulsion not found" }, status: :not_found
        end
    end

    private

    def expulsion_params
        params.permit(:date, :movement_type, :diaper_changed, :diaper_size, :volume, :color, :consistency, :num_wipes_used)
    end
end