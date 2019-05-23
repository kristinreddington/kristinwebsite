Rails.application.routes.draw do
  namespace :v1, defaults: {format: 'json'} do 
    get '/posts', :to => 'posts#index'
  end 
  get '*page', :to => 'static#index', constraints: -> (req) do 
    !req.xhr? && req.format.html? 
  end 
  # Forward root to StaticController#index
  root 'static#index'
end
