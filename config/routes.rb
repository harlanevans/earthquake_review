Rails.application.routes.draw do
  
  namespace :api do

    resources :quakes do
      resources :shocks
    end
  
  end
  
end
