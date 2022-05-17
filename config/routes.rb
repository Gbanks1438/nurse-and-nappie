Rails.application.routes.draw do
  # Calling resources will utilize all associated actions [:index, :show, :new, :edit, :update, :destroy]
  
  ##- NOT WORKING
  resources :vaccines, only: [:index, :show, :new, :update, :destroy]
  # get "/vaccines", to: "vaccines#index"       ##500 INTERNAL SERVER ERROR

  #WORKING
  resources :users, only: [:index, :show]
  resources :babies, only: [:index, :show, :new, :update, :destroy]
  resources :meals, only: [:index, :show, :new, :update, :destroy]
  resources :expulsions, only: [:index, :show, :new, :update, :destroy]
  resources :milestones, only: [:index, :show, :new, :update, :destroy]
  resources :notes, only: [:index, :show, :new, :update, :destroy]
  
  #Custom Routes
  post "/login", to: "sessions#login"            #200 OK
  delete "/logout", to: "sessions#logout"        #204 NO CONTENT
  post "/signup", to: "users#create"             #201 CREATED
  patch "/signup", to: "users#update"            #200 OK
  get "/me", to: "users#index"                   #200 OK
  delete "/me", to: "users#destroy"              #204 NO CONTENT


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end