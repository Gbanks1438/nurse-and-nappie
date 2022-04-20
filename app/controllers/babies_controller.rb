class BabiesController < ApplicationController
    def index
        render json: Baby.all
    end

    def show
        baby = Baby.find_by_id(params[:id])
        if baby
            render json: baby
        else
            render json: {"error": "Baby not found"}, status: :not_found
        end
    end
end