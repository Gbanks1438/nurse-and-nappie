class SessionsController < ApplicationController

    skip_before_action :authenticate_user, only: [:login]
  
      def login
        # byebug
        user = User.find_by_username(params[:username])
          if user.authenticate(params[:password])
            session[:user_id] = user.id
            # byebug
            render json: user, status: :ok
          else
            # byebug
            render json: { error: "Invalid Email Address or Password" }, status: :unauthorized
          end
      end
  
      def logout
        session.delete :user_id
        end
        
    end