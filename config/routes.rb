Rails.application.routes.draw do
  get '/tags', to: 'tags#index'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  resources :posts
  #
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
