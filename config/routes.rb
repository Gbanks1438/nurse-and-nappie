Rails.application.routes.draw do
  # Calling resources will utilize all associated actions [:index, :show, :new, :edit, :update, :destroy]
  resources :expulsions, only: [:index, :show, :new, :edit, :update]
  resources :meals, only: [:index, :show, :new, :edit, :update]
  resources :babies, only: [:index, :show, :new, :edit, :update]
  resources :notes, only: [:index, :show, :new, :edit, :update]
  resources :users

  # Custom Routes
  post "/login", to: "sessions#login" #200 OK
  delete "/logout", to: "sessions#logout" #204 No Content
  get "/me", to: "users#show" #200 OK
  post "/signup", to: "users#create" #201 Created
  delete "/me", to: "users#destroy" #204 No Content
  patch "/signup", to: "users#update" #200 OK
  get "/", to: "babies#show" 

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
