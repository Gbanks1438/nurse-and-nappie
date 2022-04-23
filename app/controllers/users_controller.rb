class UsersController < ApplicationController
    #skip_before_action :authenticate_user, only: [:create, :show]
    
    def index
        render json: User.all
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "Not Logged In"}, status: :unauthorized
        end
    end

    def create
        new_user = User.new(customer_params)
        if new_user.save
            session[:user_id] = new_user.id
            render json: new_user, status: :created
        else
            render json: {errors: new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
            if current_user
                current_user.update(customer_params)
        render json: current_user
        else
          render json: { error: "User not found" }, status: :not_found
        end
    end

    def destroy
            current_user.destroy
            head :no_content
    end

    private

    def customer_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :email)
    end
    
end