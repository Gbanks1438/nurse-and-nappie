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
end