class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        user = User.find_by_id(params[:id])
        if user
            render json: user
        else
            render json: {"error": "User not found"}, status: :not_found
        end
    end
end