Rails.application.routes.draw do
  # Calling resources will utilize all associated actions [:index, :show, :new, :edit, :update, :destroy]
  #NOT WORKING
  resources :vaccines, only: [:index, :show, :new, :edit, :update]
  resources :users
  #WORKING
  resources :babies, only: [:index, :show, :new, :edit, :update]
  resources :meals, only: [:index, :show, :new, :edit, :update]
  resources :expulsions, only: [:index, :show, :new, :edit, :update]
  resources :milestones, only: [:index, :show, :new, :edit, :update]
  resources :notes, only: [:index, :show, :new, :edit, :update]
  
  ## - NEEDS TESTING - 
  #Custom Routes
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/me", to: "users#destroy"
  patch "/signup", to: "users#update"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end